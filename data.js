const countryData = {
  // ✅ Safe
  AU: { name: "Australia", category: "safe" },
  AT: { name: "Austria", category: "safe" },
  BE: { name: "Belgium", category: "safe" },
  CA: { name: "Canada", category: "safe" },
  CL: { name: "Chile", category: "safe" },
  HR: { name: "Croatia", category: "safe" },
  CZ: { name: "Czech Republic", category: "safe" },
  DK: { name: "Denmark", category: "safe" },
  EE: { name: "Estonia", category: "safe" },
  FI: { name: "Finland", category: "safe" },
  FR: { name: "France", category: "safe" },
  DE: { name: "Germany", category: "safe" },
  GR: { name: "Greece", category: "safe" },
  GL: { name: "Greenland", category: "safe" },
  HU: { name: "Hungary", category: "safe" },
  IS: { name: "Iceland", category: "safe" },
  IE: { name: "Ireland", category: "safe" },
  IL: { name: "Israel", category: "safe" },
  IT: { name: "Italy", category: "safe" },
  JP: { name: "Japan", category: "safe" },
  LV: { name: "Latvia", category: "safe" },
  LI: { name: "Liechtenstein", category: "safe" },
  LT: { name: "Lithuania", category: "safe" },
  LU: { name: "Luxembourg", category: "safe" },
  MT: { name: "Malta", category: "safe" },
  MC: { name: "Monaco", category: "safe" },
  NL: { name: "Netherlands", category: "safe" },
  NZ: { name: "New Zealand", category: "safe" },
  NO: { name: "Norway", category: "safe" },
  PL: { name: "Poland", category: "safe" },
  PT: { name: "Portugal", category: "safe" },
  SM: { name: "San Marino", category: "safe" },
  SG: { name: "Singapore", category: "safe" },
  SK: { name: "Slovakia", category: "safe" },
  SI: { name: "Slovenia", category: "safe" },
  KR: { name: "South Korea", category: "safe" },
  ES: { name: "Spain", category: "safe" },
  SE: { name: "Sweden", category: "safe" },
  CH: { name: "Switzerland", category: "safe" },
  AE: { name: "United Arab Emirates", category: "safe" },
  GB: { name: "United Kingdom", category: "safe" },
  US: { name: "United States", category: "safe" },
  UY: { name: "Uruguay", category: "safe" },
  AD: { name: "Andorra", category: "safe" },

  // ⚠️ Caution
  AL: { name: "Albania", category: "caution" },
  AM: { name: "Armenia", category: "caution" },
  AR: { name: "Argentina", category: "caution" },
  BB: { name: "Barbados", category: "caution" },
  BY: { name: "Belarus", category: "caution" },
  BA: { name: "Bosnia and Herzegovina", category: "caution" },
  BW: { name: "Botswana", category: "caution" },
  BR: { name: "Brazil", category: "caution" },
  BG: { name: "Bulgaria", category: "caution" },
  CN: { name: "China", category: "caution" },
  CO: { name: "Colombia", category: "caution" },
  CR: { name: "Costa Rica", category: "caution" },
  CU: { name: "Cuba", category: "caution" },
  DM: { name: "Dominica", category: "caution" },
  DO: { name: "Dominican Republic", category: "caution" },
  EC: { name: "Ecuador", category: "caution" },
  FJ: { name: "Fiji", category: "caution" },
  GE: { name: "Georgia", category: "caution" },
  GD: { name: "Grenada", category: "caution" },
  GT: { name: "Guatemala", category: "caution" },
  GY: { name: "Guyana", category: "caution" },
  JM: { name: "Jamaica", category: "caution" },
  JO: { name: "Jordan", category: "caution" },
  KZ: { name: "Kazakhstan", category: "caution" },
  XK: { name: "Kosovo", category: "caution" },
  LB: { name: "Lebanon", category: "caution" },
  MY: { name: "Malaysia", category: "caution" },
  MV: { name: "Maldives", category: "caution" },
  MA: { name: "Morocco", category: "caution" },
  MN: { name: "Mongolia", category: "caution" },
  ME: { name: "Montenegro", category: "caution" },
  MZ: { name: "Mozambique", category: "caution" },
  NA: { name: "Namibia", category: "caution" },
  NG: { name: "Nigeria", category: "caution" },
  PA: { name: "Panama", category: "caution" },
  PY: { name: "Paraguay", category: "caution" },
  PE: { name: "Peru", category: "caution" },
  PH: { name: "Philippines", category: "caution" },
  RO: { name: "Romania", category: "caution" },
  RS: { name: "Serbia", category: "caution" },
  LK: { name: "Sri Lanka", category: "caution" },
  SR: { name: "Suriname", category: "caution" },
  SY: { name: "Syria", category: "caution" },
  TH: { name: "Thailand", category: "caution" },
  TN: { name: "Tunisia", category: "caution" },
  TR: { name: "Turkey", category: "caution" },
  VN: { name: "Vietnam", category: "caution" },
  ZA: { name: "South Africa", category: "caution" },

  // 🚫 Danger
  AF: { name: "Afghanistan", category: "danger" },
  AO: { name: "Angola", category: "danger" },
  BD: { name: "Bangladesh", category: "danger" },
  BJ: { name: "Benin", category: "danger" },
  BO: { name: "Bolivia", category: "danger" },
  BF: { name: "Burkina Faso", category: "danger" },
  BI: { name: "Burundi", category: "danger" },
  KH: { name: "Cambodia", category: "danger" },
  CF: { name: "Central African Republic", category: "danger" },
  TD: { name: "Chad", category: "danger" },
  CD: { name: "Democratic Republic of Congo", category: "danger" },
  GQ: { name: "Equatorial Guinea", category: "danger" },
  ER: { name: "Eritrea", category: "danger" },
  SZ: { name: "Eswatini", category: "danger" },
  ET: { name: "Ethiopia", category: "danger" },
  GM: { name: "Gambia", category: "danger" },
  GH: { name: "Ghana", category: "danger" },
  GN: { name: "Guinea", category: "danger" },
  GW: { name: "Guinea-Bissau", category: "danger" },
  HT: { name: "Haiti", category: "danger" },
  HN: { name: "Honduras", category: "danger" },
  IN: { name: "India", category: "danger" },
  ID: { name: "Indonesia", category: "danger" },
  IR: { name: "Iran", category: "danger" },
  IQ: { name: "Iraq", category: "danger" },
  CI: { name: "Ivory Coast", category: "danger" },
  KE: { name: "Kenya", category: "danger" },
  LA: { name: "Laos", category: "danger" },
  LS: { name: "Lesotho", category: "danger" },
  LR: { name: "Liberia", category: "danger" },
  MG: { name: "Madagascar", category: "danger" },
  MW: { name: "Malawi", category: "danger" },
  ML: { name: "Mali", category: "danger" },
  MR: { name: "Mauritania", category: "danger" },
  MM: { name: "Myanmar", category: "danger" },
  MX: { name: "Mexico", category: "danger" },
  NP: { name: "Nepal", category: "danger" },
  NI: { name: "Nicaragua", category: "danger" },
  NE: { name: "Niger", category: "danger" },
  PG: { name: "Papua New Guinea", category: "danger" },
  PK: { name: "Pakistan", category: "danger" },
  RW: { name: "Rwanda", category: "danger" },
  ST: { name: "São Tomé and Príncipe", category: "danger" },
  SN: { name: "Senegal", category: "danger" },
  SL: { name: "Sierra Leone", category: "danger" },
  SO: { name: "Somalia", category: "danger" },
  SS: { name: "South Sudan", category: "danger" },
  SD: { name: "Sudan", category: "danger" },
  TJ: { name: "Tajikistan", category: "danger" },
  TZ: { name: "Tanzania", category: "danger" },
  TG: { name: "Togo", category: "danger" },
  TM: { name: "Turkmenistan", category: "danger" },
  UG: { name: "Uganda", category: "danger" },
  UZ: { name: "Uzbekistan", category: "danger" },
  VE: { name: "Venezuela", category: "danger" },
  YE: { name: "Yemen", category: "danger" },
  ZM: { name: "Zambia", category: "danger" },
  ZW: { name: "Zimbabwe", category: "danger" },
  RU: { name: "Russia", category: "danger" },
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
