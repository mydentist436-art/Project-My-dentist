export interface FAQ {
  id: number
  question: string
  answer: string
  category: 'treatment' | 'general' | 'cost' | 'care'
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Does Root Canal Treatment (RCT) hurt?',
    answer:
      'Modern Root Canal Treatment is virtually painless. Dr. Amin uses effective local anesthesia before beginning, so you should feel little to no discomfort during the procedure. Many patients are surprised at how comfortable RCT actually is today compared to older techniques. You may experience mild soreness for 1–2 days after, which is normal and manageable with simple pain relievers.',
    category: 'treatment',
  },
  {
    id: 2,
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend visiting every 6 months for a routine checkup and professional cleaning. Regular visits help catch problems early — before they become painful and expensive — and keep your gums and teeth healthy. If you have ongoing dental issues like gum disease or wear braces, more frequent visits may be advised.',
    category: 'general',
  },
  {
    id: 3,
    question: 'How much does teeth cleaning (scaling) cost?',
    answer:
      'Teeth cleaning and scaling at our clinic typically costs between ₹500 and ₹1,200 depending on the extent of tartar buildup and the type of cleaning required. We always tell you the cost upfront before starting any treatment — no hidden charges.',
    category: 'cost',
  },
  {
    id: 4,
    question: 'Are dental implants safe?',
    answer:
      'Yes, dental implants are a very safe and well-established treatment with over 95% long-term success rates worldwide. They are made of biocompatible titanium that integrates with your jawbone naturally. Dr. Amin conducts a thorough evaluation before recommending implants to ensure you are a suitable candidate. With proper care, implants can last a lifetime.',
    category: 'treatment',
  },
  {
    id: 5,
    question: 'How long does a tooth filling last?',
    answer:
      'Composite (tooth-colored) fillings typically last 7–12 years with good oral hygiene. Their lifespan depends on the size of the filling, your diet, and how well you care for your teeth. We use high-quality composite materials to ensure durability and a natural appearance.',
    category: 'treatment',
  },
  {
    id: 6,
    question: 'At what age should my child first visit the dentist?',
    answer:
      'We recommend bringing your child for their first dental visit by their first birthday, or when their first tooth appears — whichever comes first. Early visits help children become comfortable with dental care and allow Dr. Amin to monitor proper tooth development and provide guidance on brushing and diet.',
    category: 'general',
  },
  {
    id: 7,
    question: 'Is teeth whitening safe for my teeth?',
    answer:
      'Professional teeth whitening performed in our clinic is completely safe when done correctly. Unlike unregulated home kits, our treatment uses clinically approved whitening agents at the right concentration, applied carefully to avoid gum irritation. Some patients may experience mild sensitivity for 24–48 hours after, which resolves on its own.',
    category: 'treatment',
  },
  {
    id: 8,
    question: 'How do I care for my teeth after extraction?',
    answer:
      'After extraction, bite on the gauze for 30–45 minutes, avoid spitting or rinsing forcefully for 24 hours, and do not use a straw. Eat soft, cool foods for 2–3 days and avoid the extraction side while chewing. Keep the area clean by gently rinsing with warm salt water from the next day. Dr. Amin provides detailed written instructions after every extraction.',
    category: 'care',
  },
  {
    id: 9,
    question: 'Can I eat normally with dental braces?',
    answer:
      'You can eat most foods with braces, but you should avoid hard, sticky, or crunchy items like raw carrots, hard candy, popcorn, and chewing gum, as these can break the brackets or wires. Cut harder fruits and vegetables into smaller pieces. Dr. Amin will give you a full diet guide when you start braces treatment.',
    category: 'care',
  },
  {
    id: 10,
    question: 'Do you accept walk-in patients?',
    answer:
      'Yes, we do accept walk-in patients, though we always recommend calling ahead to book an appointment to minimize your waiting time. For dental emergencies like severe toothache, swelling, or broken teeth, call us immediately and we will do our best to see you as quickly as possible.',
    category: 'general',
  },
]

export const hygieneTips = [
  {
    id: 1,
    title: 'Brush Correctly, Twice Daily',
    tip: 'Use a soft-bristle toothbrush and fluoride toothpaste. Brush for at least 2 minutes, twice a day — morning and before bed. Use gentle circular motions; scrubbing too hard wears down enamel and irritates gums.',
    icon: 'Brush',
  },
  {
    id: 2,
    title: 'Floss Every Day',
    tip: 'Flossing removes food particles and plaque from between teeth where your toothbrush cannot reach. Do it gently once a day, preferably at night before brushing.',
    icon: 'GitMerge',
  },
  {
    id: 3,
    title: 'Rinse with Mouthwash',
    tip: 'An antibacterial fluoride mouthwash helps reduce bacteria, strengthen enamel, and freshen breath. Use it after brushing at night for best results. Avoid rinsing immediately after — let the fluoride work.',
    icon: 'Droplets',
  },
  {
    id: 4,
    title: 'Limit Sugar and Acidic Foods',
    tip: 'Sugar feeds cavity-causing bacteria. Acidic drinks like sodas and citrus juices weaken enamel. Limit these, and rinse your mouth with water after consuming them. Don\'t brush immediately after acidic foods — wait 30 minutes.',
    icon: 'AlertTriangle',
  },
  {
    id: 5,
    title: 'Stay Hydrated',
    tip: 'Drinking water throughout the day helps wash away food particles and bacteria, and keeps saliva flow healthy. Saliva is your mouth\'s natural defense against decay. Fluoridated tap water also strengthens your teeth.',
    icon: 'Droplet',
  },
  {
    id: 6,
    title: 'Visit Us Every 6 Months',
    tip: 'Professional cleaning removes calculus (hardened plaque) that brushing cannot, and Dr. Amin can spot early signs of cavities, gum disease, or other issues before they worsen. Prevention is always cheaper than treatment.',
    icon: 'CalendarCheck',
  },
]
