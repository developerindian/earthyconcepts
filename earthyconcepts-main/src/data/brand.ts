// Brand story and values from brochure pages 1-7

export const brandStory = {
  tagline: "Nature's Promise. Formulated for Life.",
  mission: "Dedicated to bringing the ancient wisdom of Ayurveda into modern wellness, Earthy Concepts crafts herbal formulations rooted in nature and science.",
  vision: "To be a trusted partner in your wellness journey, delivering herbal supplements and skincare that support balance, vitality, and natural beauty.",
  about: `Earthy Concepts is built on the belief that true wellness begins with nature. We source the finest botanicals—ethically grown and sustainably harvested—to create supplements and skincare that honor traditional Ayurvedic wisdom while meeting modern quality standards.

Every product is carefully formulated to support harmony between body, mind, and spirit. From farm to formula, we maintain complete transparency and traceability, ensuring that what goes into your body is pure, potent, and purposeful.`,
};

export const coreValues = [
  {
    id: 'purity',
    title: 'Purity First',
    description: 'We use only the highest quality ingredients, free from synthetic additives, fillers, or harmful chemicals. Every batch is tested for potency and purity.',
    icon: 'Leaf',
  },
  {
    id: 'tradition',
    title: 'Rooted in Tradition',
    description: 'Our formulations are inspired by centuries-old Ayurvedic texts and practices, adapted thoughtfully for contemporary wellness needs.',
    icon: 'BookOpen',
  },
  {
    id: 'sustainability',
    title: 'Sustainable Sourcing',
    description: 'We partner with ethical farmers and suppliers who share our commitment to environmental stewardship and fair trade practices.',
    icon: 'Globe',
  },
  {
    id: 'transparency',
    title: 'Full Transparency',
    description: 'From ingredient origins to manufacturing processes, we believe you deserve to know exactly what you are putting in and on your body.',
    icon: 'Eye',
  },
  {
    id: 'efficacy',
    title: 'Science-Backed Efficacy',
    description: 'While honoring tradition, we embrace modern research to validate the benefits of our formulations and ensure optimal bioavailability.',
    icon: 'FlaskConical',
  },
  {
    id: 'holistic',
    title: 'Holistic Wellness',
    description: 'We believe in addressing wellness from all angles—internal health, external beauty, and emotional balance—for complete well-being.',
    icon: 'Heart',
  },
];

export const qualityPromises = [
  {
    title: '100% Natural',
    description: 'Pure botanical ingredients with no synthetic additives',
  },
  {
    title: 'GMP Certified',
    description: 'Manufactured in facilities following Good Manufacturing Practices',
  },
  {
    title: 'Third-Party Tested',
    description: 'Independent lab testing for purity and potency',
  },
  {
    title: 'Sustainably Sourced',
    description: 'Ethically harvested ingredients from trusted suppliers',
  },
  {
    title: 'Cruelty-Free',
    description: 'Never tested on animals',
  },
  {
    title: 'No Preservatives',
    description: 'Fresh formulations without artificial preservatives',
  },
];

export const wellnessConcepts = [
  {
    id: 'digestive-health',
    name: 'Digestive Wellness',
    description: 'Support your gut health and digestive harmony with our carefully crafted herbal solutions.',
    icon: 'Flame',
    color: 'amber',
    relatedProducts: ['diabetea', 'aloedigest', 'gentlegut', 'metatrim', 'digest-ease', 'liver-detox'],
  },
  {
    id: 'immunity-vitality',
    name: 'Immunity & Vitality',
    description: 'Strengthen your natural defenses and boost overall vitality with potent immune-supporting herbs.',
    icon: 'Shield',
    color: 'green',
    relatedProducts: ['imunetea', 'amlashield', 'dailyimmunity', 'immuno-shield', 'energy-vitality'],
  },
  {
    id: 'stress-sleep',
    name: 'Stress & Sleep',
    description: 'Find calm, balance, and restful sleep with our adaptogenic and relaxation-focused formulas.',
    icon: 'Moon',
    color: 'purple',
    relatedProducts: ['serenetea', 'zenfocus', 'stressease', 'sleep-well', 'stress-relief'],
  },
  {
    id: 'womens-wellness',
    name: "Women's Wellness",
    description: 'Nurture hormonal balance and feminine vitality with herbs traditionally used for women\'s health.',
    icon: 'Sparkles',
    color: 'pink',
    relatedProducts: ['hertea', 'fembalance', 'womens-balance', 'herbalance'],
  },
  {
    id: 'mens-wellness',
    name: "Men's Wellness",
    description: 'Support masculine vitality, strength, and performance with time-tested Ayurvedic herbs.',
    icon: 'Zap',
    color: 'blue',
    relatedProducts: ['naturalstamina', 'manboost', 'mens-vitality', 'hisvitality'],
  },
  {
    id: 'heart-metabolic',
    name: 'Heart & Metabolic Health',
    description: 'Maintain cardiovascular wellness and balanced metabolism with our heart-supporting formulations.',
    icon: 'HeartPulse',
    color: 'red',
    relatedProducts: ['hearttea', 'heartdefense', 'glucosteady', 'glycobalance', 'bitterguard', 'heart-care', 'sugar-balance'],
  },
  {
    id: 'skin-beauty',
    name: 'Skin & Beauty',
    description: 'Reveal your natural radiance with our botanical skincare and beauty-from-within supplements.',
    icon: 'Sun',
    color: 'orange',
    relatedProducts: ['radianttea', 'clearderma', 'illumamask', 'detoxmask', 'hydramist', 'rosemist', 'skin-glow'],
  },
  {
    id: 'joint-mobility',
    name: 'Joint & Mobility',
    description: 'Support flexible, comfortable movement with our joint-nourishing herbal solutions.',
    icon: 'Activity',
    color: 'teal',
    relatedProducts: ['jointflex', 'joint-comfort', 'bone-strength', 'osteosupport'],
  },
];

export const quizQuestions = [
  {
    id: 1,
    question: 'What is your primary wellness goal?',
    options: [
      { text: 'Boost immunity and energy', concepts: ['immunity-vitality'] },
      { text: 'Manage stress and improve sleep', concepts: ['stress-sleep'] },
      { text: 'Support digestive health', concepts: ['digestive-health'] },
      { text: 'Improve skin and beauty', concepts: ['skin-beauty'] },
      { text: 'Support heart and metabolic health', concepts: ['heart-metabolic'] },
      { text: 'Joint comfort and mobility', concepts: ['joint-mobility'] },
    ],
  },
  {
    id: 2,
    question: 'How would you describe your current stress levels?',
    options: [
      { text: 'High - I feel overwhelmed often', concepts: ['stress-sleep'] },
      { text: 'Moderate - Occasional stress', concepts: ['stress-sleep', 'immunity-vitality'] },
      { text: 'Low - Generally calm', concepts: ['immunity-vitality', 'digestive-health'] },
    ],
  },
  {
    id: 3,
    question: 'How is your sleep quality?',
    options: [
      { text: 'Poor - Trouble falling or staying asleep', concepts: ['stress-sleep'] },
      { text: 'Fair - Occasional restlessness', concepts: ['stress-sleep'] },
      { text: 'Good - Usually restful', concepts: ['immunity-vitality'] },
    ],
  },
  {
    id: 4,
    question: 'Do you experience digestive discomfort?',
    options: [
      { text: 'Yes, frequently', concepts: ['digestive-health'] },
      { text: 'Sometimes', concepts: ['digestive-health'] },
      { text: 'Rarely or never', concepts: ['immunity-vitality'] },
    ],
  },
  {
    id: 5,
    question: 'Are you concerned about blood sugar or heart health?',
    options: [
      { text: 'Yes, actively managing', concepts: ['heart-metabolic'] },
      { text: 'Somewhat concerned', concepts: ['heart-metabolic', 'digestive-health'] },
      { text: 'Not a current concern', concepts: ['immunity-vitality'] },
    ],
  },
  {
    id: 6,
    question: 'What best describes your skin concerns?',
    options: [
      { text: 'Dullness or uneven tone', concepts: ['skin-beauty'] },
      { text: 'Acne or blemishes', concepts: ['skin-beauty', 'digestive-health'] },
      { text: 'Dryness or dehydration', concepts: ['skin-beauty'] },
      { text: 'No major concerns', concepts: ['immunity-vitality'] },
    ],
  },
  {
    id: 7,
    question: 'Do you experience joint stiffness or discomfort?',
    options: [
      { text: 'Yes, regularly', concepts: ['joint-mobility'] },
      { text: 'Occasionally', concepts: ['joint-mobility'] },
      { text: 'No', concepts: ['immunity-vitality'] },
    ],
  },
  {
    id: 8,
    question: 'What is your gender?',
    options: [
      { text: 'Female', concepts: ['womens-wellness'] },
      { text: 'Male', concepts: ['mens-wellness'] },
      { text: 'Prefer not to say', concepts: [] },
    ],
  },
];
