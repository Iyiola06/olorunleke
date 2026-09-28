// Single source of truth for biographical facts. Page copy, JSON-LD and /llms.txt all read from here
// so search engines and AI assistants see one consistent description of Olorunleke Ojuolape.

export const PROFILE = {
  name: 'Olorunleke Ojuolape',
  givenName: 'Olorunleke',
  familyName: 'Ojuolape',
  knownAs: 'Leke Ojuolape',
  alternateNames: ['Leke Ojuolape', 'Leke', 'Olorunleke "Leke" Ojuolape'],
  role: 'Managing Director & CEO',
  roleShort: 'MD/CEO',
  company: 'Mindfire Homes and Investments',
  companyShort: 'Mindfire Homes',
  flagship: 'Skylands',
  background: 'Geology',
  city: 'Abuja',
  country: 'Nigeria',
  tagline: 'From the Earth to Estates',
  mission:
    'To help more people own a piece of the future, to give families a better life than the one before, and to build communities where the next generation will thrive.',
  summary:
    'Olorunleke "Leke" Ojuolape is a Nigerian geologist-turned real estate entrepreneur and the Managing Director & CEO of Mindfire Homes and Investments, an Abuja-based real estate company known for clean, verifiable titles, strategic locations with real appreciation potential, and communities designed for how people actually want to live.',
  services: ['Land acquisition', 'Due diligence', 'Documentation', 'Infrastructure planning', 'Development'],
  promises: [
    'Clean, verifiable titles',
    'Strategic locations with real appreciation potential',
    'Communities designed for how people actually want to live',
  ],
  mindfireDescription:
    'Mindfire Homes and Investments is a Nigerian real estate company founded and led by Olorunleke Ojuolape as MD/CEO. It was created with fire in its name to ignite a new standard of modern living in Nigeria, handling acquisition, due diligence, documentation, infrastructure planning and development so clients can invest with confidence and live with pride.',
  skylandsDescription:
    'Skylands is a Mindfire Homes and Investments estate in Abuja and the company\'s vision of elevated living: wide, serene, thoughtfully planned spaces where luxury meets peace, and investment meets legacy.',
  knowsAbout: [
    'Geology',
    'Real estate development',
    'Real estate investment in Nigeria',
    'Abuja real estate',
    'Land acquisition',
    'Property due diligence',
    'Land title documentation',
    'Infrastructure planning',
    'Estate development',
    'Entrepreneurship',
    'Negotiation',
    'Golf',
  ],
  hats: ['Strategist', 'Negotiator', 'Leader', 'Visionary'],
  interests: ['Golf'],
} as const;

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: 'Who is Olorunleke Ojuolape?',
    answer: `${PROFILE.summary} He is also known as Leke Ojuolape.`,
  },
  {
    question: 'What is Olorunleke Ojuolape\'s background?',
    answer:
      'His background is in Geology. Studying the earth taught him how land holds value over time, that location is never accidental, and that what lies beneath determines what can stand above. The move from geology into real estate was a natural evolution: from studying land to unlocking its value.',
  },
  {
    question: 'What is Mindfire Homes and Investments?',
    answer: `${PROFILE.mindfireDescription} Mindfire is known for clean, verifiable titles, strategic locations with real appreciation potential, and thoughtfully designed communities.`,
  },
  {
    question: 'What is Skylands?',
    answer: `${PROFILE.skylandsDescription} It was created to show that Abuja, and Nigeria, can offer world-class living without compromise.`,
  },
  {
    question: 'What does Olorunleke Ojuolape do outside of work?',
    answer:
      'He plays golf. He sees the game as quiet, strategic and unforgiving of shortcuts, like geology and real estate, and credits it with teaching patience when deals delay, precision when stakes are high, and humility in both wins and losses.',
  },
  {
    question: 'How can I contact Olorunleke Ojuolape or invest with Mindfire?',
    answer:
      'Use the contact page on olorunleke.com to email him directly about investments, joint ventures or partnerships, or connect on LinkedIn and Instagram. Property enquiries can also go through mindfirehomes.com.',
  },
];
