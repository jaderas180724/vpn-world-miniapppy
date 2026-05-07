// ============================================================
// VPN World - Countries & Server Data
// ============================================================

const CONTINENTS = {
  EU: 'Europa',
  AS: 'Asia',
  AM: 'América',
  AF: 'África',
  OC: 'Oceanía',
};

const COUNTRIES = [
  // Europa
  { name:'Albania', code:'AL', flag:'🇦🇱', continent:'EU' },
  { name:'Alemania', code:'DE', flag:'🇩🇪', continent:'EU' },
  { name:'Andorra', code:'AD', flag:'🇦🇩', continent:'EU' },
  { name:'Austria', code:'AT', flag:'🇦🇹', continent:'EU' },
  { name:'Bélgica', code:'BE', flag:'🇧🇪', continent:'EU' },
  { name:'Bielorrusia', code:'BY', flag:'🇧🇾', continent:'EU' },
  { name:'Bosnia', code:'BA', flag:'🇧🇦', continent:'EU' },
  { name:'Bulgaria', code:'BG', flag:'🇧🇬', continent:'EU' },
  { name:'Croacia', code:'HR', flag:'🇭🇷', continent:'EU' },
  { name:'Dinamarca', code:'DK', flag:'🇩🇰', continent:'EU' },
  { name:'Eslovaquia', code:'SK', flag:'🇸🇰', continent:'EU' },
  { name:'Eslovenia', code:'SI', flag:'🇸🇮', continent:'EU' },
  { name:'España', code:'ES', flag:'🇪🇸', continent:'EU' },
  { name:'Estonia', code:'EE', flag:'🇪🇪', continent:'EU' },
  { name:'Finlandia', code:'FI', flag:'🇫🇮', continent:'EU' },
  { name:'Francia', code:'FR', flag:'🇫🇷', continent:'EU' },
  { name:'Grecia', code:'GR', flag:'🇬🇷', continent:'EU' },
  { name:'Hungría', code:'HU', flag:'🇭🇺', continent:'EU' },
  { name:'Irlanda', code:'IE', flag:'🇮🇪', continent:'EU' },
  { name:'Islandia', code:'IS', flag:'🇮🇸', continent:'EU' },
  { name:'Italia', code:'IT', flag:'🇮🇹', continent:'EU' },
  { name:'Letonia', code:'LV', flag:'🇱🇻', continent:'EU' },
  { name:'Liechtenstein', code:'LI', flag:'🇱🇮', continent:'EU' },
  { name:'Lituania', code:'LT', flag:'🇱🇹', continent:'EU' },
  { name:'Luxemburgo', code:'LU', flag:'🇱🇺', continent:'EU' },
  { name:'Macedonia', code:'MK', flag:'🇲🇰', continent:'EU' },
  { name:'Malta', code:'MT', flag:'🇲🇹', continent:'EU' },
  { name:'Moldavia', code:'MD', flag:'🇲🇩', continent:'EU' },
  { name:'Mónaco', code:'MC', flag:'🇲🇨', continent:'EU' },
  { name:'Montenegro', code:'ME', flag:'🇲🇪', continent:'EU' },
  { name:'Noruega', code:'NO', flag:'🇳🇴', continent:'EU' },
  { name:'Países Bajos', code:'NL', flag:'🇳🇱', continent:'EU' },
  { name:'Polonia', code:'PL', flag:'🇵🇱', continent:'EU' },
  { name:'Portugal', code:'PT', flag:'🇵🇹', continent:'EU' },
  { name:'Reino Unido', code:'GB', flag:'🇬🇧', continent:'EU' },
  { name:'Rep. Checa', code:'CZ', flag:'🇨🇿', continent:'EU' },
  { name:'Rumania', code:'RO', flag:'🇷🇴', continent:'EU' },
  { name:'Rusia', code:'RU', flag:'🇷🇺', continent:'EU' },
  { name:'Serbia', code:'RS', flag:'🇷🇸', continent:'EU' },
  { name:'Suecia', code:'SE', flag:'🇸🇪', continent:'EU' },
  { name:'Suiza', code:'CH', flag:'🇨🇭', continent:'EU' },
  { name:'Ucrania', code:'UA', flag:'🇺🇦', continent:'EU' },

  // Asia
  { name:'Afganistán', code:'AF', flag:'🇦🇫', continent:'AS' },
  { name:'Arabia Saudita', code:'SA', flag:'🇸🇦', continent:'AS' },
  { name:'Armenia', code:'AM', flag:'🇦🇲', continent:'AS' },
  { name:'Azerbaiyán', code:'AZ', flag:'🇦🇿', continent:'AS' },
  { name:'Bangladesh', code:'BD', flag:'🇧🇩', continent:'AS' },
  { name:'Baréin', code:'BH', flag:'🇧🇭', continent:'AS' },
  { name:'Brunéi', code:'BN', flag:'🇧🇳', continent:'AS' },
  { name:'Bután', code:'BT', flag:'🇧🇹', continent:'AS' },
  { name:'Camboya', code:'KH', flag:'🇰🇭', continent:'AS' },
  { name:'Catar', code:'QA', flag:'🇶🇦', continent:'AS' },
  { name:'China', code:'CN', flag:'🇨🇳', continent:'AS' },
  { name:'Chipre', code:'CY', flag:'🇨🇾', continent:'AS' },
  { name:'Corea del Norte', code:'KP', flag:'🇰🇵', continent:'AS' },
  { name:'Corea del Sur', code:'KR', flag:'🇰🇷', continent:'AS' },
  { name:'EAU', code:'AE', flag:'🇦🇪', continent:'AS' },
  { name:'Filipinas', code:'PH', flag:'🇵🇭', continent:'AS' },
  { name:'Georgia', code:'GE', flag:'🇬🇪', continent:'AS' },
  { name:'India', code:'IN', flag:'🇮🇳', continent:'AS' },
  { name:'Indonesia', code:'ID', flag:'🇮🇩', continent:'AS' },
  { name:'Irak', code:'IQ', flag:'🇮🇶', continent:'AS' },
  { name:'Irán', code:'IR', flag:'🇮🇷', continent:'AS' },
  { name:'Israel', code:'IL', flag:'🇮🇱', continent:'AS' },
  { name:'Japón', code:'JP', flag:'🇯🇵', continent:'AS' },
  { name:'Jordania', code:'JO', flag:'🇯🇴', continent:'AS' },
  { name:'Kazajistán', code:'KZ', flag:'🇰🇿', continent:'AS' },
  { name:'Kirguistán', code:'KG', flag:'🇰🇬', continent:'AS' },
  { name:'Kuwait', code:'KW', flag:'🇰🇼', continent:'AS' },
  { name:'Laos', code:'LA', flag:'🇱🇦', continent:'AS' },
  { name:'Líbano', code:'LB', flag:'🇱🇧', continent:'AS' },
  { name:'Malasia', code:'MY', flag:'🇲🇾', continent:'AS' },
  { name:'Maldivas', code:'MV', flag:'🇲🇻', continent:'AS' },
  { name:'Mongolia', code:'MN', flag:'🇲🇳', continent:'AS' },
  { name:'Myanmar', code:'MM', flag:'🇲🇲', continent:'AS' },
  { name:'Nepal', code:'NP', flag:'🇳🇵', continent:'AS' },
  { name:'Omán', code:'OM', flag:'🇴🇲', continent:'AS' },
  { name:'Pakistán', code:'PK', flag:'🇵🇰', continent:'AS' },
  { name:'Singapur', code:'SG', flag:'🇸🇬', continent:'AS' },
  { name:'Siria', code:'SY', flag:'🇸🇾', continent:'AS' },
  { name:'Sri Lanka', code:'LK', flag:'🇱🇰', continent:'AS' },
  { name:'Tailandia', code:'TH', flag:'🇹🇭', continent:'AS' },
  { name:'Taiwán', code:'TW', flag:'🇹🇼', continent:'AS' },
  { name:'Tayikistán', code:'TJ', flag:'🇹🇯', continent:'AS' },
  { name:'Turkmenistán', code:'TM', flag:'🇹🇲', continent:'AS' },
  { name:'Turquía', code:'TR', flag:'🇹🇷', continent:'AS' },
  { name:'Uzbekistán', code:'UZ', flag:'🇺🇿', continent:'AS' },
  { name:'Vietnam', code:'VN', flag:'🇻🇳', continent:'AS' },
  { name:'Yemen', code:'YE', flag:'🇾🇪', continent:'AS' },

  // América
  { name:'Argentina', code:'AR', flag:'🇦🇷', continent:'AM' },
  { name:'Bahamas', code:'BS', flag:'🇧🇸', continent:'AM' },
  { name:'Barbados', code:'BB', flag:'🇧🇧', continent:'AM' },
  { name:'Belice', code:'BZ', flag:'🇧🇿', continent:'AM' },
  { name:'Bolivia', code:'BO', flag:'🇧🇴', continent:'AM' },
  { name:'Brasil', code:'BR', flag:'🇧🇷', continent:'AM' },
  { name:'Canadá', code:'CA', flag:'🇨🇦', continent:'AM' },
  { name:'Chile', code:'CL', flag:'🇨🇱', continent:'AM' },
  { name:'Colombia', code:'CO', flag:'🇨🇴', continent:'AM' },
  { name:'Costa Rica', code:'CR', flag:'🇨🇷', continent:'AM' },
  { name:'Cuba', code:'CU', flag:'🇨🇺', continent:'AM' },
  { name:'Ecuador', code:'EC', flag:'🇪🇨', continent:'AM' },
  { name:'El Salvador', code:'SV', flag:'🇸🇻', continent:'AM' },
  { name:'EE.UU.', code:'US', flag:'🇺🇸', continent:'AM' },
  { name:'Guatemala', code:'GT', flag:'🇬🇹', continent:'AM' },
  { name:'Haití', code:'HT', flag:'🇭🇹', continent:'AM' },
  { name:'Honduras', code:'HN', flag:'🇭🇳', continent:'AM' },
  { name:'Jamaica', code:'JM', flag:'🇯🇲', continent:'AM' },
  { name:'México', code:'MX', flag:'🇲🇽', continent:'AM' },
  { name:'Nicaragua', code:'NI', flag:'🇳🇮', continent:'AM' },
  { name:'Panamá', code:'PA', flag:'🇵🇦', continent:'AM' },
  { name:'Paraguay', code:'PY', flag:'🇵🇾', continent:'AM' },
  { name:'Perú', code:'PE', flag:'🇵🇪', continent:'AM' },
  { name:'Rep. Dominicana', code:'DO', flag:'🇩🇴', continent:'AM' },
  { name:'Trinidad y Tobago', code:'TT', flag:'🇹🇹', continent:'AM' },
  { name:'Uruguay', code:'UY', flag:'🇺🇾', continent:'AM' },
  { name:'Venezuela', code:'VE', flag:'🇻🇪', continent:'AM' },

  // África
  { name:'Angola', code:'AO', flag:'🇦🇴', continent:'AF' },
  { name:'Argelia', code:'DZ', flag:'🇩🇿', continent:'AF' },
  { name:'Benín', code:'BJ', flag:'🇧🇯', continent:'AF' },
  { name:'Botsuana', code:'BW', flag:'🇧🇼', continent:'AF' },
  { name:'Burkina Faso', code:'BF', flag:'🇧🇫', continent:'AF' },
  { name:'Burundi', code:'BI', flag:'🇧🇮', continent:'AF' },
  { name:'Cabo Verde', code:'CV', flag:'🇨🇻', continent:'AF' },
  { name:'Camerún', code:'CM', flag:'🇨🇲', continent:'AF' },
  { name:'Chad', code:'TD', flag:'🇹🇩', continent:'AF' },
  { name:'Congo', code:'CG', flag:'🇨🇬', continent:'AF' },
  { name:'Costa de Marfil', code:'CI', flag:'🇨🇮', continent:'AF' },
  { name:'Egipto', code:'EG', flag:'🇪🇬', continent:'AF' },
  { name:'Etiopía', code:'ET', flag:'🇪🇹', continent:'AF' },
  { name:'Gabón', code:'GA', flag:'🇬🇦', continent:'AF' },
  { name:'Gambia', code:'GM', flag:'🇬🇲', continent:'AF' },
  { name:'Ghana', code:'GH', flag:'🇬🇭', continent:'AF' },
  { name:'Guinea', code:'GN', flag:'🇬🇳', continent:'AF' },
  { name:'Kenia', code:'KE', flag:'🇰🇪', continent:'AF' },
  { name:'Liberia', code:'LR', flag:'🇱🇷', continent:'AF' },
  { name:'Libia', code:'LY', flag:'🇱🇾', continent:'AF' },
  { name:'Madagascar', code:'MG', flag:'🇲🇬', continent:'AF' },
  { name:'Malaui', code:'MW', flag:'🇲🇼', continent:'AF' },
  { name:'Malí', code:'ML', flag:'🇲🇱', continent:'AF' },
  { name:'Marruecos', code:'MA', flag:'🇲🇦', continent:'AF' },
  { name:'Mauricio', code:'MU', flag:'🇲🇺', continent:'AF' },
  { name:'Mozambique', code:'MZ', flag:'🇲🇿', continent:'AF' },
  { name:'Namibia', code:'NA', flag:'🇳🇦', continent:'AF' },
  { name:'Níger', code:'NE', flag:'🇳🇪', continent:'AF' },
  { name:'Nigeria', code:'NG', flag:'🇳🇬', continent:'AF' },
  { name:'Ruanda', code:'RW', flag:'🇷🇼', continent:'AF' },
  { name:'Senegal', code:'SN', flag:'🇸🇳', continent:'AF' },
  { name:'Seychelles', code:'SC', flag:'🇸🇨', continent:'AF' },
  { name:'Somalia', code:'SO', flag:'🇸🇴', continent:'AF' },
  { name:'Sudáfrica', code:'ZA', flag:'🇿🇦', continent:'AF' },
  { name:'Sudán', code:'SD', flag:'🇸🇩', continent:'AF' },
  { name:'Tanzania', code:'TZ', flag:'🇹🇿', continent:'AF' },
  { name:'Togo', code:'TG', flag:'🇹🇬', continent:'AF' },
  { name:'Túnez', code:'TN', flag:'🇹🇳', continent:'AF' },
  { name:'Uganda', code:'UG', flag:'🇺🇬', continent:'AF' },
  { name:'Zambia', code:'ZM', flag:'🇿🇲', continent:'AF' },
  { name:'Zimbabue', code:'ZW', flag:'🇿🇼', continent:'AF' },

  // Oceanía
  { name:'Australia', code:'AU', flag:'🇦🇺', continent:'OC' },
  { name:'Fiyi', code:'FJ', flag:'🇫🇯', continent:'OC' },
  { name:'Nueva Zelanda', code:'NZ', flag:'🇳🇿', continent:'OC' },
  { name:'Papúa Nueva Guinea', code:'PG', flag:'🇵🇬', continent:'OC' },
  { name:'Samoa', code:'WS', flag:'🇼🇸', continent:'OC' },
  { name:'Tonga', code:'TO', flag:'🇹🇴', continent:'OC' },
  { name:'Vanuatu', code:'VU', flag:'🇻🇺', continent:'OC' },
];

// Generate mock VPN servers per country
const PROTOCOLS = ['wireguard', 'openvpn', 'ikev2'];
const CITIES_BY_CONTINENT = {
  EU: ['Ámsterdam','Londres','Fráncfort','París','Madrid','Estocolmo','Zúrich','Milán','Varsovia','Lisboa'],
  AS: ['Tokio','Singapur','Seúl','Hong Kong','Dubái','Mumbai','Bangkok','Yakarta','Tel Aviv','Shanghái'],
  AM: ['Nueva York','Los Ángeles','Miami','Toronto','São Paulo','Santiago','Bogotá','CDMX','Buenos Aires','Lima'],
  AF: ['Ciudad del Cabo','Nairobi','Lagos','El Cairo','Casablanca','Acra','Túnez','Argel','Dakar','Adís Abeba'],
  OC: ['Sídney','Melbourne','Auckland','Brisbane','Perth','Suva','Wellington','Adelaida','Gold Coast','Canberra'],
};

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function seededShuffle(arr, randFn) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(randFn() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const COUNTRY_SERVERS = {};
COUNTRIES.forEach(c => {
  const seed = hashCode(c.code);
  const rand = seededRand(seed);
  const cities = CITIES_BY_CONTINENT[c.continent] || ['Ciudad Principal'];
  const count = 1 + Math.floor(rand() * cities.length);
  const shuffled = seededShuffle(cities, rand);
  const servers = [];

  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const protoIdx = Math.floor(rand() * PROTOCOLS.length);
    const protocol = PROTOCOLS[protoIdx];
    const port = protocol === 'wireguard' ? 51820 : protocol === 'openvpn' ? 1194 : 500;
    const ip = `${c.code.toLowerCase()}-${shuffled[i].toLowerCase().replace(/\s+/g,'-')}.vpnworld.io`;

    servers.push({
      city: shuffled[i],
      protocol: protocol,
      hostname: ip,
      ip: `${10 + Math.floor(rand()*200)}.${Math.floor(rand()*255)}.${Math.floor(rand()*255)}.1`,
      port: port,
      load: Math.floor(rand() * 80) + 5,
      ping: Math.floor(rand() * 200) + 10,
    });
  }

  COUNTRY_SERVERS[c.code] = servers;
});

// Total server count
const TOTAL_SERVERS = Object.values(COUNTRY_SERVERS).reduce((sum, s) => sum + s.length, 0);
