const countryData = {
  // ✅ Safe
  AU: { name: "Australia", category: "safe" },
  AT: { name: "Austria", category: "safe" },
  BE: { name: "Belgium", category: "safe" },
  CA: { name: "Canada", category: "safe" },
  CZ: { name: "Czech Republic", category: "safe" },
  DK: { name: "Denmark", category: "safe" },
  EE: { name: "Estonia", category: "safe" },
  FI: { name: "Finland", category: "safe" },
  FR: { name: "France", category: "safe" },
  DE: { name: "Germany", category: "safe" },
  GL: { name: "Greenland", category: "safe" },
  HK: { name: "Hong Kong", category: "safe" },
  IS: { name: "Iceland", category: "safe" },
  IE: { name: "Ireland", category: "safe" },
  IL: { name: "Israel", category: "safe" },
  IT: { name: "Italy", category: "safe" },
  JP: { name: "Japan", category: "safe" },
  LV: { name: "Latvia", category: "safe" },
  LT: { name: "Lithuania", category: "safe" },
  LU: { name: "Luxembourg", category: "safe" },
  MT: { name: "Malta", category: "safe" },
  NL: { name: "Netherlands", category: "safe" },
  NZ: { name: "New Zealand", category: "safe" },
  NO: { name: "Norway", category: "safe" },
  PT: { name: "Portugal", category: "safe" },
  SG: { name: "Singapore", category: "safe" },
  SI: { name: "Slovenia", category: "safe" },
  KR: { name: "South Korea", category: "safe" },
  ES: { name: "Spain", category: "safe" },
  SE: { name: "Sweden", category: "safe" },
  CH: { name: "Switzerland", category: "safe" },
  GB: { name: "United Kingdom", category: "safe" },
  US: { name: "United States", category: "safe" },

  // ⚠️ Caution
  AE: { name: "United Arab Emirates", category: "caution" },
  AF: { name: "Afghanistan", category: "caution" },
  AL: { name: "Albania", category: "caution" },
  DZ: { name: "Algeria", category: "caution" },
  AD: { name: "Andorra", category: "caution" },
  AO: { name: "Angola", category: "caution" },
  AG: { name: "Antigua and Barbuda", category: "caution" },
  AR: { name: "Argentina", category: "caution" },
  AM: { name: "Armenia", category: "caution" },
  AZ: { name: "Azerbaijan", category: "caution" },
  BS: { name: "Bahamas", category: "caution" },
  BH: { name: "Bahrain", category: "caution" },
  BB: { name: "Barbados", category: "caution" },
  BY: { name: "Belarus", category: "caution" },
  BZ: { name: "Belize", category: "caution" },
  BJ: { name: "Benin", category: "caution" },
  BT: { name: "Bhutan", category: "caution" },
  BO: { name: "Bolivia", category: "caution" },
  BA: { name: "Bosnia and Herzegovina", category: "caution" },
  BW: { name: "Botswana", category: "caution" },
  BR: { name: "Brazil", category: "caution" },
  BN: { name: "Brunei Darussalam", category: "caution" },
  BG: { name: "Bulgaria", category: "caution" },
  BF: { name: "Burkina Faso", category: "caution" },
  BI: { name: "Burundi", category: "caution" },
  CV: { name: "Cabo Verde", category: "caution" },
  KH: { name: "Cambodia", category: "caution" },
  CM: { name: "Cameroon", category: "caution" },
  CL: { name: "Chile", category: "caution" },
  CN: { name: "China", category: "caution" },
  CO: { name: "Colombia", category: "caution" },
  CG: { name: "Congo", category: "caution" },
  CR: { name: "Costa Rica", category: "caution" },
  HR: { name: "Croatia", category: "caution" },
  CU: { name: "Cuba", category: "caution" },
  CY: { name: "Cyprus", category: "caution" },
  DJ: { name: "Djibouti", category: "caution" },
  DM: { name: "Dominica", category: "caution" },
  DO: { name: "Dominican Republic", category: "caution" },
  EC: { name: "Ecuador", category: "caution" },
  EG: { name: "Egypt", category: "caution" },
  SV: { name: "El Salvador", category: "caution" },
  GQ: { name: "Equatorial Guinea", category: "caution" },
  ER: { name: "Eritrea", category: "caution" },
  EE: { name: "Eswatini", category: "caution" },
  ET: { name: "Ethiopia", category: "caution" },
  FJ: { name: "Fiji", category: "caution" },
  GA: { name: "Gabon", category: "caution" },
  GM: { name: "Gambia", category: "caution" },
  GE: { name: "Georgia", category: "caution" },
  GH: { name: "Ghana", category: "caution" },
  GR: { name: "Greece", category: "caution" },
  GD: { name: "Grenada", category: "caution" },
  GT: { name: "Guatemala", category: "caution" },
  GG: { name: "Guinea", category: "caution" },
  GW: { name: "Guinea‑Bissau", category: "caution" },
  GY: { name: "Guyana", category: "caution" },
  HT: { name: "Haiti", category: "caution" },
  HN: { name: "Honduras", category: "caution" },
  HU: { name: "Hungary", category: "caution" },
  CI: { name: "Ivory Coast", category: "caution" },
  JM: { name: "Jamaica", category: "caution" },
  JO: { name: "Jordan", category: "caution" },
  KZ: { name: "Kazakhstan", category: "caution" },
  KE: { name: "Kenya", category: "caution" },
  KI: { name: "Kiribati", category: "caution" },
  XK: { name: "Kosovo", category: "caution" },
  KW: { name: "Kuwait", category: "caution" },
  KG: { name: "Kyrgyzstan", category: "caution" },
  LA: { name: "Laos", category: "caution" },
  LB: { name: "Lebanon", category: "caution" },
  LS: { name: "Lesotho", category: "caution" },
  LR: { name: "Liberia", category: "caution" },
  LY: { name: "Libya", category: "caution" },
  LI: { name: "Liechtenstein", category: "caution" },
  MG: { name: "Madagascar", category: "caution" },
  MW: { name: "Malawi", category: "caution" },
  MY: { name: "Malaysia", category: "caution" },
  MV: { name: "Maldives", category: "caution" },
  ML: { name: "Mali", category: "caution" },
  MT: { name: "Malta", category: "caution" },
  MH: { name: "Marshall Islands", category: "caution" },
  MR: { name: "Mauritania", category: "caution" },
  MU: { name: "Mauritius", category: "caution" },
  MX: { name: "Mexico", category: "caution" },
  FM: { name: "Micronesia", category: "caution" },
  MD: { name: "Moldova", category: "caution" },
  MC: { name: "Monaco", category: "caution" },
  MN: { name: "Mongolia", category: "caution" },
  ME: { name: "Montenegro", category: "caution" },
  MA: { name: "Morocco", category: "caution" },
  MZ: { name: "Mozambique", category: "caution" },
  MM: { name: "Myanmar", category: "caution" },
  NA: { name: "Namibia", category: "caution" },
  NR: { name: "Nauru", category: "caution" },
  NP: { name: "Nepal", category: "caution" },
  NI: { name: "Nicaragua", category: "caution" },
  NE: { name: "Niger", category: "caution" },
  NG: { name: "Nigeria", category: "caution" },
  MK: { name: "North Macedonia", category: "caution" },
  OM: { name: "Oman", category: "caution" },
  PK: { name: "Pakistan", category: "caution" },
  PW: { name: "Palau", category: "caution" },
  PA: { name: "Panama", category: "caution" },
  PG: { name: "Papua New Guinea", category: "caution" },
  PY: { name: "Paraguay", category: "caution" },
  PE: { name: "Peru", category: "caution" },
  PH: { name: "Philippines", category: "caution" },
  PL: { name: "Poland", category: "caution" },
  QA: { name: "Qatar", category: "caution" },
  RO: { name: "Romania", category: "caution" },
  RU: { name: "Russia", category: "caution" },
  RW: { name: "Rwanda", category: "caution" },
  KN: { name: "Saint Kitts and Nevis", category: "caution" },
  LC: { name: "Saint Lucia", category: "caution" },
  VC: { name: "Saint Vincent and the Grenadines", category: "caution" },
  WS: { name: "Samoa", category: "caution" },
  SM: { name: "San Marino", category: "caution" },
  ST: { name: "São Tomé and Príncipe", category: "caution" },
  SA: { name: "Saudi Arabia", category: "caution" },
  SN: { name: "Senegal", category: "caution" },
  RS: { name: "Serbia", category: "caution" },
  SC: { name: "Seychelles", category: "caution" },
  SL: { name: "Sierra Leone", category: "caution" },
  SK: { name: "Slovakia", category: "caution" },
  SB: { name: "Solomon Islands", category: "caution" },
  ZA: { name: "South Africa", category: "caution" },
  SS: { name: "South Sudan", category: "caution" },
  LK: { name: "Sri Lanka", category: "caution" },
  SD: { name: "Sudan", category: "caution" },
  SR: { name: "Suriname", category: "caution" },
  SY: { name: "Syria", category: "caution" },
  TW: { name: "Taiwan", category: "caution" },
  TJ: { name: "Tajikistan", category: "caution" },
  TZ: { name: "Tanzania", category: "caution" },
  TH: { name: "Thailand", category: "caution" },
  TG: { name: "Togo", category: "caution" },
  TO: { name: "Tonga", category: "caution" },
  TT: { name: "Trinidad and Tobago", category: "caution" },
  TN: { name: "Tunisia", category: "caution" },
  TR: { name: "Turkey", category: "caution" },
  TM: { name: "Turkmenistan", category: "caution" },
  TV: { name: "Tuvalu", category: "caution" },
  UG: { name: "Uganda", category: "caution" },
  UA: { name: "Ukraine", category: "caution" },
  UY: { name: "Uruguay", category: "caution" },
  UZ: { name: "Uzbekistan", category: "caution" },
  VA: { name: "Vatican City", category: "caution" },
  VE: { name: "Venezuela", category: "caution" },
  VN: { name: "Vietnam", category: "caution" },
  YE: { name: "Yemen", category: "caution" },
  ZM: { name: "Zambia", category: "caution" },
  ZW: { name: "Zimbabwe", category: "caution" },

  // 🚫 Danger
  AF: { name: "Afghanistan", category: "danger" },
  BD: { name: "Bangladesh", category: "danger" },
  KH: { name: "Cambodia", category: "danger" },
  IN: { name: "India", category: "danger" },
  ID: { name: "Indonesia", category: "danger" },
  IR: { name: "Iran", category: "danger" },
  IQ: { name: "Iraq", category: "danger" },
  LA: { name: "Laos", category: "danger" },
  MM: { name: "Myanmar", category: "danger" },
  NP: { name: "Nepal", category: "danger" },
  KP: { name: "North Korea", category: "danger" },
  PK: { name: "Pakistan", category: "danger" },
  PH: { name: "Philippines", category: "danger" },
  SY: { name: "Syria", category: "danger" },
  TJ: { name: "Tajikistan", category: "danger" },
  TH: { name: "Thailand", category: "danger" },
  VN: { name: "Vietnam", category: "danger" },
  YE: { name: "Yemen", category: "danger" },
  EG: { name: "Egypt", category: "danger" },
  JO: { name: "Jordan", category: "danger" },
  LB: { name: "Lebanon", category: "danger" },
  LY: { name: "Libya", category: "danger" },
  MR: { name: "Mauritania", category: "danger" },
  MA: { name: "Morocco", category: "danger" },
  SA: { name: "Saudi Arabia", category: "danger" },
  TN: { name: "Tunisia", category: "danger" },
  BO: { name: "Bolivia", category: "danger" },
  BR: { name: "Brazil", category: "danger" },
  CO: { name: "Colombia", category: "danger" },
  EC: { name: "Ecuador", category: "danger" },
  SV: { name: "El Salvador", category: "danger" },
  GT: { name: "Guatemala", category: "danger" },
  HT: { name: "Haiti", category: "danger" },
  HN: { name: "Honduras", category: "danger" },
  MX: { name: "Mexico", category: "danger" },
  NI: { name: "Nicaragua", category: "danger" },
  PY: { name: "Paraguay", category: "danger" },
  PE: { name: "Peru", category: "danger" },
  VE: { name: "Venezuela", category: "danger" },
  CF: { name: "Central African Republic", category: "danger" },
  TD: { name: "Chad", category: "danger" },
  CD: { name: "Democratic Republic of the Congo", category: "danger" },
  ER: { name: "Eritrea", category: "danger" },
  ET: { name: "Ethiopia", category: "danger" },
  GN: { name: "Guinea", category: "danger" },
  LR: { name: "Liberia", category: "danger" },
  MG: { name: "Madagascar", category: "danger" },
  MW: { name: "Malawi", category: "danger" },
  ML: { name: "Mali", category: "danger" },
  MZ: { name: "Mozambique", category: "danger" },
  NE: { name: "Niger", category: "danger" },
  NG: { name: "Nigeria", category: "danger" },
  SL: { name: "Sierra Leone", category: "danger" },
  SO: { name: "Somalia", category: "danger" },
  SS: { name: "South Sudan", category: "danger" },
  SD: { name: "Sudan", category: "danger" },
  TZ: { name: "Tanzania", category: "danger" },
  UG: { name: "Uganda", category: "danger" },
  ZM: { name: "Zambia", category: "danger" },
  ZW: { name: "Zimbabwe", category: "danger" },
  FJ: { name: "Fiji", category: "danger" },
  KI: { name: "Kiribati", category: "danger" },
  FM: { name: "Micronesia", category: "danger" },
  PG: { name: "Papua New Guinea", category: "danger" },
  SB: { name: "Solomon Islands", category: "danger" },
  TV: { name: "Tuvalu", category: "danger" },
  VU: { name: "Vanuatu", category: "danger" },
};

const categories = {
  safe: {
    label: "Safe to Drink",
    color: "#2ABBA7",
    message: `Tap water is safe to drink in [country name]. While a filter isn’t necessary, using your WaterWell bottle can improve taste and reduce PFAS, heavy metals, and microplastics for a cleaner, crisper sip.`,
    detailedMessage: `<h4>No Filter Needed, But Can Improve Taste & Purity</h4>
    <p>Tap water is safe to drink, meeting international standards.</p>
    <p><strong>WaterWell Benefit:</strong> While a filter isn’t essential for safety, using the WaterWell travel filter bottle can:</p>
    <ul><li>Improve taste by removing chlorine.</li><li>Reduce PFAS (forever chemicals), heavy metals, and microplastics.</li></ul>`,
    iconClass: "safe",
  },
  caution: {
    label: "Caution",
    color: "#F4C13D",
    message: `Tap water in [country name] may contain bacteria, parasites, or cysts. Use your WaterWell bottle to remove 99.9% of these contaminants and enjoy safe, reliable hydration anywhere.`,
    detailedMessage: `<h4>Bacteria, Parasites, & Cysts Present, Filter Recommended</h4>
    <p>Tap water may be treated but still poses a risk of bacterial, parasitic, and cyst contamination (e.g., Giardia, Cryptosporidium).</p>
    <p><strong>WaterWell Benefit:</strong> The filter removes <strong>99.9% of bacteria, parasites, and cysts,</strong> making the water safe to drink.</p>`,
    iconClass: "caution",
  },
  danger: {
    label: "High Risk",
    color: "#E94B35",
    message: `Tap water in [country name] is unsafe due to bacteria, viruses, or pollutants. Filter with your WaterWell bottle and add boiling or chemical purification for full protection.`,
    detailedMessage: `<h4>Unsafe Without Filtration & Boiling</h4>
    <p>Tap water is <strong>unsafe due to high risks of bacterial AND viral contamination</strong>, chemical pollutants, or industrial waste.</p>
    <p><strong>WaterWell Benefit:</strong> The filter will remove bacteria, but viruses (which are smaller than the filter’s 0.1-micron pore size) may remain, so additional treatment (boiling or chemical purification) is advised.</p>`,
    iconClass: "danger",
  },
};

const extendedDisclaimer = `
<div class="disclaimer-extended">

  <p>
    The information provided in this map regarding the safety of drinking tap water
    in different countries is for general informational purposes only. While every
    effort has been made to ensure accuracy, water quality can vary within countries
    and even between cities or regions. Factors such as infrastructure, contamination
    risks, and local water treatment processes can impact safety.
  </p>

  <p>
    Travelers and residents should always verify current water safety recommendations
    with local authorities, health organizations, or government advisories before
    drinking tap water in any location. WaterWell assumes no liability for any
    inaccuracies, omissions, or consequences arising from reliance on this information.
  </p>

  <p>For the most up-to-date and detailed information, consult:</p>
  <ul>
    <li>
      The <strong>World Health Organization (WHO)</strong>
      (<a href="https://www.who.int" target="_blank" rel="noopener noreferrer">www.who.int</a>)
    </li>
    <li>
      The <strong>Centers for Disease Control (CDC)</strong>
      (<a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer">www.cdc.gov</a>)
    </li>
    <li>
      National and local government water safety authorities
    </li>
  </ul>

  <h3>Source of the Data</h3>
  <p>
    The information in this table was compiled from multiple travel and health
    sources, including:
  </p>
  <ul>
    <li>WHO Drinking Water Guidelines</li>
    <li>CDC Safe Water Guidance for Travelers</li>
    <li>Government advisories and water quality reports</li>
    <li>
      Travel advisories from sources such as the UK Foreign Office,
      the US Department of State, and travel guidebooks
    </li>
  </ul>
</div>
`;
