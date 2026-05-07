// ============================================================
// VPN World - App Logic
// ============================================================

(function() {
  'use strict';

  // --- Telegram Web App ---
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
    // Apply Telegram theme colors
    if (tg.themeParams.bg_color) {
      document.documentElement.style.setProperty('--bg-primary', tg.themeParams.bg_color);
      document.documentElement.style.setProperty('--bg-secondary', tg.themeParams.secondary_bg_color || tg.themeParams.bg_color);
      document.documentElement.style.setProperty('--bg-card', tg.themeParams.secondary_bg_color || tg.themeParams.bg_color);
      document.documentElement.style.setProperty('--text-primary', tg.themeParams.text_color);
      document.documentElement.style.setProperty('--text-secondary', tg.themeParams.hint_color);
    }
  }

  // --- State ---
  let currentContinent = 'all';
  let searchQuery = '';

  // --- DOM refs ---
  const $grid = document.getElementById('country-grid');
  const $search = document.getElementById('search');
  const $empty = document.getElementById('empty-state');
  const $modal = document.getElementById('modal');
  const $modalFlag = document.getElementById('modal-flag');
  const $modalTitle = document.getElementById('modal-title');
  const $modalServers = document.getElementById('modal-servers');
  const $modalClose = document.getElementById('modal-close');
  const $toast = document.getElementById('toast');
  const $serverCount = document.getElementById('server-count');
  const $statServers = document.getElementById('stat-servers');
  const $continentBtns = document.querySelectorAll('.continent-btn');

  // --- Init stats ---
  $statServers.textContent = TOTAL_SERVERS;
  $serverCount.textContent = `${TOTAL_SERVERS} servers`;

  // --- Render country cards ---
  function getFilteredCountries() {
    return COUNTRIES.filter(c => {
      if (currentContinent !== 'all' && c.continent !== currentContinent) return false;
      if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }

  function renderGrid() {
    const filtered = getFilteredCountries();
    $grid.innerHTML = '';

    if (filtered.length === 0) {
      $empty.classList.remove('hidden');
      $grid.style.display = 'none';
      return;
    }

    $empty.classList.add('hidden');
    $grid.style.display = 'grid';

    filtered.forEach(c => {
      const servers = COUNTRY_SERVERS[c.code] || [];
      const card = document.createElement('div');
      card.className = 'country-card';
      card.innerHTML = `
        <span class="country-flag">${c.flag}</span>
        <span class="country-name">${c.name}</span>
        <span class="country-servers">${servers.length} server${servers.length !== 1 ? 's' : ''}</span>
      `;
      card.addEventListener('click', () => openModal(c));
      $grid.appendChild(card);
    });

    updateStats(filtered);
  }

  function updateStats(countries) {
    let totalServers = 0;
    const protocols = new Set();
    countries.forEach(c => {
      const servers = COUNTRY_SERVERS[c.code] || [];
      totalServers += servers.length;
      servers.forEach(s => protocols.add(s.protocol));
    });
    $statServers.textContent = totalServers;
    document.getElementById('stat-countries').textContent = countries.length;
    document.getElementById('stat-protocols').textContent = protocols.size;
  }

  // --- Modal ---
  function openModal(country) {
    if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');

    $modalFlag.textContent = country.flag;
    $modalTitle.textContent = country.name;
    const servers = COUNTRY_SERVERS[country.code] || [];

    $modalServers.innerHTML = servers.map(s => `
      <div class="server-item">
        <div class="server-item-header">
          <span class="server-city">📍 ${s.city}</span>
          <span class="server-protocol protocol-${s.protocol}">${s.protocol}</span>
        </div>
        <div class="server-details">
          <div class="server-detail">
            <span class="server-detail-label">Hostname</span>
            <span class="server-detail-value">${s.hostname}</span>
          </div>
          <div class="server-detail">
            <span class="server-detail-label">IP</span>
            <span class="server-detail-value">${s.ip}</span>
          </div>
          <div class="server-detail">
            <span class="server-detail-label">Puerto</span>
            <span class="server-detail-value">${s.port}</span>
          </div>
          <div class="server-detail">
            <span class="server-detail-label">Carga</span>
            <span class="server-detail-value" style="color: ${s.load > 70 ? 'var(--red)' : 'var(--green)'}">${s.load}%</span>
          </div>
          <div class="server-detail">
            <span class="server-detail-label">Ping</span>
            <span class="server-detail-value">${s.ping} ms</span>
          </div>
        </div>
        <div class="server-actions">
          <button class="btn btn-copy" data-hostname="${s.hostname}" data-ip="${s.ip}" data-port="${s.port}" data-protocol="${s.protocol}">
            📋 Copiar Config
          </button>
        </div>
      </div>
    `).join('');

    // Bind copy buttons
    $modalServers.querySelectorAll('.btn-copy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyConfig(btn.dataset);
      });
    });

    $modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  $modalClose.addEventListener('click', closeModal);
  $modal.addEventListener('click', (e) => {
    if (e.target === $modal) closeModal();
  });

  // --- Copy config ---
  function copyConfig({ hostname, ip, port, protocol }) {
    const config = protocol === 'wireguard'
      ? `[Interface]\nPrivateKey = <TU_CLAVE_PRIVADA>\nAddress = 10.0.0.2/24\nDNS = 1.1.1.1\n\n[Peer]\nPublicKey = <CLAVE_PUBLICA_SERVIDOR>\nEndpoint = ${ip}:${port}\nAllowedIPs = 0.0.0.0/0`
      : protocol === 'openvpn'
      ? `client\ndev tun\nproto udp\nremote ${ip} ${port}\nresolv-retry infinite\nnobind\npersist-key\npersist-tun\nremote-cert-tls server\nauth SHA512\ncipher AES-256-GCM\nverb 3`
      : `conn VPN-${hostname.split('.')[0]}\n  left=%defaultroute\n  leftid=<TU_ID>\n  right=${ip}\n  rightid=<ID_SERVIDOR>\n  auto=start`;

    navigator.clipboard.writeText(config).then(() => {
      showToast('✅ Configuración copiada');
      if (tg?.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
    }).catch(() => {
      showToast('❌ Error al copiar');
    });
  }

  // --- Toast ---
  let toastTimeout;
  function showToast(msg) {
    $toast.textContent = msg;
    $toast.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      $toast.classList.add('hidden');
    }, 2000);
  }

  // --- Search ---
  $search.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderGrid();
  });

  // --- Continent filter ---
  $continentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (tg?.HapticFeedback) tg.HapticFeedback.selectionChanged();
      $continentBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentContinent = btn.dataset.continent;
      renderGrid();
    });
  });

  // --- Keyboard: ESC to close modal ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // --- Main button (Telegram) ---
  if (tg?.MainButton) {
    tg.MainButton.setText('🌍 Buscar país').show();
    tg.MainButton.onClick(() => {
      $search.focus();
      $search.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Initial render ---
  renderGrid();

  // --- Expose for debugging ---
  window.VPNWorld = {
    COUNTRIES,
    COUNTRY_SERVERS,
    TOTAL_SERVERS,
    renderGrid,
    openModal,
    closeModal,
  };

})();
