import { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'cleaning-scaling',
    title: 'Teeth Cleaning & Scaling',
    shortDesc: 'Professional plaque and tartar removal for a healthier, fresher smile.',
    fullDesc:
      'Our professional teeth cleaning and scaling service removes plaque, tartar, and surface stains that regular brushing cannot address. Using ultrasonic scalers and hand instruments, Dr. Amin ensures a thorough, comfortable cleaning experience that prevents gum disease and bad breath. Recommended every 6 months.',
    icon: 'Sparkles',
    image: '/images/services/teeth_cleaning_1779329880592.png',
    benefits: ['Prevents gum disease', 'Removes bad breath', 'Polished, brighter teeth', 'Comfortable, painless procedure'],
    duration: '45–60 minutes',
    priceRange: '₹500 – ₹1,200',
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    shortDesc: 'Restore decayed teeth with tooth-colored composite fillings.',
    fullDesc:
      'We use advanced composite (tooth-colored) resin fillings that blend seamlessly with your natural teeth. Whether it\'s a small cavity or a larger decay, Dr. Amin ensures minimal drilling and maximum preservation of your healthy tooth structure. Done in a single visit.',
    icon: 'Shield',
    image: '/images/services/tooth_filling_1779329896882.png',
    benefits: ['Natural tooth color match', 'Done in one visit', 'Minimal tooth removal', 'Durable, long-lasting'],
    duration: '30–60 minutes',
    priceRange: '₹400 – ₹1,500',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    shortDesc: 'Save your natural tooth with modern, painless root canal therapy.',
    fullDesc:
      'Root Canal Treatment is no longer the feared procedure it once was. Using modern rotary endodontic techniques and effective local anesthesia, Dr. Amin performs comfortable, efficient RCT that saves your natural tooth from extraction. Most treatments are completed in 1–2 visits.',
    icon: 'Zap',
    image: '/images/services/root_canal_1779329915665.png',
    benefits: ['Saves your natural tooth', 'Relieves severe toothache', 'Modern, near-painless technique', 'Crown placement for protection'],
    duration: '60–90 minutes per session',
    priceRange: '₹2,500 – ₹5,000',
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    shortDesc: 'Safe, gentle extraction with minimal discomfort and fast healing.',
    fullDesc:
      'When a tooth cannot be saved, Dr. Amin performs extractions with great care and precision. Using effective local anesthesia and gentle technique, the procedure is quick and comfortable. Post-extraction instructions and follow-up care are provided to ensure smooth healing.',
    icon: 'Scissors',
    image: '/images/services/tooth_extraction_1779329930737.png',
    benefits: ['Quick procedure', 'Minimal discomfort', 'Detailed post-care guidance', 'Options for replacement discussed'],
    duration: '20–45 minutes',
    priceRange: '₹300 – ₹2,000',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent, natural-looking replacement for missing teeth.',
    fullDesc:
      'Dental implants are the gold standard for tooth replacement. A titanium post is placed into the jawbone, acting as an artificial root, topped with a lifelike crown. Implants look, feel, and function just like natural teeth and can last a lifetime with proper care.',
    icon: 'Anchor',
    image: '/images/services/dental_implants_1779329947826.png',
    benefits: ['Permanent solution', 'Natural look and feel', 'Preserves jawbone', 'No adhesives or removal'],
    duration: 'Multiple visits over 3–6 months',
    priceRange: '₹18,000 – ₹35,000',
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Aligners',
    shortDesc: 'Straighten your teeth with metal braces or clear aligners.',
    fullDesc:
      'Whether you choose traditional metal braces or discreet clear aligners, Dr. Amin provides comprehensive orthodontic treatment to align your teeth and correct your bite. Treatment is customized to your specific needs with regular monitoring for best results.',
    icon: 'AlignCenter',
    image: '/images/services/braces_aligners_1779329965525.png',
    benefits: ['Corrects crowding and gaps', 'Improves bite function', 'Clear aligner options available', 'Boosts confidence'],
    duration: '12–24 months',
    priceRange: '₹15,000 – ₹45,000',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Brighten your smile by several shades in a single appointment.',
    fullDesc:
      'Our professional teeth whitening treatment uses safe, effective whitening agents to remove deep stains from tea, coffee, tobacco, and aging. Unlike over-the-counter products, our in-clinic treatment delivers dramatic, even results under the careful supervision of Dr. Amin.',
    icon: 'Sun',
    image: '/images/services/teeth_whitening_1779329984203.png',
    benefits: ['Up to 8 shades brighter', 'Safe and supervised', 'Fast results', 'Long-lasting with proper care'],
    duration: '60–90 minutes',
    priceRange: '₹3,000 – ₹6,000',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'Gentle, friendly dental care specially designed for children.',
    fullDesc:
      'Children deserve a dental experience that builds positive associations with oral health. Our clinic is designed to be welcoming and stress-free for kids. Dr. Amin uses a gentle, patient approach to treat cavities, perform cleanings, apply sealants, and guide the development of healthy smiles from an early age.',
    icon: 'Baby',
    image: '/images/services/pediatric_dentistry_1779329999968.png',
    benefits: ['Child-friendly environment', 'Prevents early tooth decay', 'Fluoride and sealant treatments', 'Parents guided on oral habits'],
    duration: '30–60 minutes',
    priceRange: '₹300 – ₹2,500',
  },
]
