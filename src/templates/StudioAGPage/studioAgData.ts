import type { CTASectionProps } from '../../components/blocks/CTASection/CTASection'
import type { FeaturesSectionProps } from '../../components/blocks/FeaturesSection/FeaturesSection'
import type { HeroProps } from '../../components/blocks/Hero/Hero'
import type { ServicesSectionProps } from '../../components/blocks/ServicesSection/ServicesSection'

const FRESHA_URL =
  'https://www.fresha.com/pt/a/studio-ag-dublin-grafton-street-109-g2nqglyh/all-offer?menu=true&pId=1348455'

export const STUDIO_AG_FRESHA_URL = FRESHA_URL

export const studioAgHero: HeroProps = {
  eyebrow: 'Studio AG · Grafton Street, Dublin',
  title: 'Refined Beauty. Exceptional Results.',
  description:
    'Studio AG is a specialist beauty studio in the heart of Dublin — home to the exclusive AG Method by Arieli Garcia.',
  actions: [
    { label: 'Explore Treatments', href: '#services', variant: 'primary' },
    { label: 'The AG Method', href: '#about', variant: 'ghost' },
  ],
}

export const studioAgServices: ServicesSectionProps = {
  eyebrow: 'Our Treatments',
  title: 'A Menu Crafted for Every Woman',
  description:
    "From radiant skin to refined brows — explore Studio AG's curated treatment categories, all available at our Grafton Street studio.",
  items: [
    {
      eyebrow: 'Category 01',
      title: 'Body Treatment',
      description:
        'Sculpting and wellness-focused body rituals designed to restore, firm, and nourish from head to toe.',
    },
    {
      eyebrow: 'Category 02',
      title: 'Facials & Skincare',
      description:
        'Advanced facial treatments personalised to your skin type, combining professional technique with premium products.',
    },
    {
      eyebrow: 'Category 03',
      title: 'Waxing',
      description:
        'Precise and gentle hair removal using professional-grade waxes for smooth, long-lasting results.',
    },
    {
      eyebrow: 'Category 04',
      title: 'Nails',
      description:
        'Classic and contemporary nail services — manicures, pedicures, and nail art with meticulous attention to detail.',
    },
    {
      eyebrow: 'Category 05',
      title: 'Eyebrows & Eyelashes',
      description:
        'Frame your features with expert brow shaping and lash treatments tailored to your natural structure.',
    },
  ],
}

export const studioAgFeatures: FeaturesSectionProps = {
  eyebrow: 'Why Studio AG',
  title: 'The Studio AG Difference',
  description:
    'We believe great beauty work is equal parts skill, intention, and care. Here is what sets us apart.',
  items: [
    {
      eyebrow: 'Signature Approach',
      title: 'The Exclusive AG Method',
      description:
        'A proprietary technique developed by Arieli Garcia — combining precision, personalisation, and professional expertise in every treatment.',
    },
    {
      eyebrow: 'Expertise',
      title: 'Specialist-Led, Always',
      description:
        'Every treatment is performed by Arieli Garcia personally. No apprentices, no compromises — just consistent, specialist-level results.',
    },
    {
      eyebrow: 'Products',
      title: 'Premium Formulations Only',
      description:
        'Studio AG uses only carefully selected professional-grade products, chosen for safety, efficacy, and skin compatibility.',
    },
    {
      eyebrow: 'Personalisation',
      title: 'Tailored to You',
      description:
        'No two clients are the same. Each treatment is adapted to your individual needs, skin type, and beauty goals.',
    },
    {
      eyebrow: 'Location',
      title: 'Discreet Central Studio',
      description:
        'Located at 109 Grafton Street, 2nd floor — an intimate, private space in the heart of Dublin, designed for comfort and discretion.',
    },
    {
      eyebrow: 'Scheduling',
      title: 'Tuesday to Saturday',
      description:
        'Available Tuesday through Saturday for your convenience. Book in advance via Fresha to secure your preferred time.',
    },
  ],
}

export const studioAgCta: CTASectionProps = {
  eyebrow: 'Reservations',
  title: 'Secure Your Appointment',
  description:
    'Book directly through Fresha — available 24/7. Studio AG appointments are in high demand. Reserve your spot today.',
  actions: [
    { label: 'Book on Fresha', href: FRESHA_URL, variant: 'primary', target: '_blank' },
    { label: 'View Full Treatment Menu', href: '#services', variant: 'ghost' },
  ],
}

export const studioAgAbout = {
  tag: 'The AG Method',
  title: 'Precision. Personalisation. Results.',
  paragraphs: [
    'Arieli Garcia is a certified beauty specialist who developed her craft across Brazil and Ireland before establishing Studio AG in the heart of Dublin — a private studio built on a single standard: exceptional work, every time.',
    "The AG Method is not a product or a trend. It is Arieli's personal philosophy of practice — a rigorous, skin-first approach where every treatment is calibrated to the individual. Precise technique, professional-grade products, and genuine expertise, applied with care.",
    'Appointments are intimate and unhurried. The studio is designed to feel private, calm, and refined — because the quality of your experience matters as much as the results.',
  ],
}

export const studioAgBeforeAfter = [
  {
    label: 'Brow Sculpting',
    beforeImg: '/images/studio-ag/before-after/brow-before.svg',
    afterImg: '/images/studio-ag/before-after/brow-after.svg',
  },
  {
    label: 'Facial Glow Treatment',
    beforeImg: '/images/studio-ag/before-after/facial-before.svg',
    afterImg: '/images/studio-ag/before-after/facial-after.svg',
  },
  {
    label: 'Lash Lift & Tint',
    beforeImg: '/images/studio-ag/before-after/lash-before.svg',
    afterImg: '/images/studio-ag/before-after/lash-after.svg',
  },
]

export const studioAgTestimonials = [
  {
    stars: '★★★★★',
    quote:
      'Arieli completely transformed my brows. She took the time to understand my face and the result was better than I ever imagined. I will not go anywhere else.',
    name: 'Sarah M.',
    service: 'Eyebrow Sculpting',
    avatar: '/images/studio-ag/testimonials/avatar-1.svg',
  },
  {
    stars: '★★★★★',
    quote:
      'The facial I had at Studio AG was unlike any I have had before. My skin looked radiant for weeks. The studio itself is so calming and professional.',
    name: 'Ciara R.',
    service: 'Personalised Facial',
    avatar: '/images/studio-ag/testimonials/avatar-2.svg',
  },
  {
    stars: '★★★★★',
    quote:
      'I was nervous about waxing but Arieli made me feel completely at ease. Quick, precise, and virtually painless. Highly recommend to anyone in Dublin.',
    name: 'Aoife K.',
    service: 'Professional Waxing',
    avatar: '/images/studio-ag/testimonials/avatar-3.svg',
  },
]

export const studioAgFaq = [
  {
    question: 'What is the AG Method?',
    answer:
      "The AG Method is Arieli Garcia's exclusive signature approach to beauty treatments. It combines precision technique, personalised care, and professional-grade products to deliver consistently refined, high-quality results for every client.",
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'All bookings are made through Fresha, our online booking platform. You can book 24/7 at your convenience. Simply click "Book on Fresha" and select your preferred treatment and time.',
  },
  {
    question: 'Where is Studio AG located?',
    answer:
      'Studio AG is located at 109 Grafton Street, 2nd floor, Dublin. We are easily accessible by public transport, situated in the heart of the city centre.',
  },
  {
    question: 'What are your opening hours?',
    answer:
      'Studio AG is open Tuesday to Saturday. Specific hours are displayed on our Fresha booking page. We recommend booking in advance as appointments fill quickly.',
  },
  {
    question: 'Can I request a consultation before booking a treatment?',
    answer:
      'Absolutely. A brief consultation is part of every appointment at Studio AG. Arieli reviews your individual needs and skin profile before beginning any treatment to ensure the best possible results.',
  },
]

export const studioAgContact = {
  address: '109 Grafton Street, 2nd floor, Dublin',
  phone: '+353 87 476 4406',
  email: 'arieligarcia.lima@gmail.com',
  hours: 'Tuesday – Saturday',
  instagram: 'https://www.instagram.com/beautystudiooag/',
  fresha: FRESHA_URL,
}

export const studioAgServiceDetails: Record<string, { paragraphs: string[] }> = {
  'Body Treatment': {
    paragraphs: [
      'Studio AG body treatments are designed to restore tone, improve circulation, and leave your skin feeling deeply nourished. Each session is personalised to your individual concern — whether that is post-event recovery, ongoing wellness, or a visible improvement in skin quality and contour.',
      'Using only professional-grade formulations, Arieli applies a combination of targeted techniques to work with your body\'s natural form. The experience is unhurried, precise, and deeply restorative — equal parts therapeutic and aesthetic.',
      'Treatments are available as standalone sessions or as part of a curated programme. Whether you are preparing for a special occasion or building a consistent self-care routine, Studio AG body treatments deliver results you can see and feel.',
    ],
  },
  'Facials & Skincare': {
    paragraphs: [
      'Every facial at Studio AG begins with a thorough skin assessment. No two complexions are the same, and Arieli\'s approach reflects that — each treatment is tailored to your specific skin type, concern, and goal, from deep hydration and luminosity to targeted clarifying and anti-ageing protocols.',
      'Drawing on advanced professional techniques and carefully selected premium skincare formulations, a Studio AG facial is not a standard high-street treatment. It is a clinical-grade experience delivered with warmth and precision — designed to produce results that are visible long after you leave the studio.',
      'Regular facial programmes are available for clients looking to maintain consistent, long-term skin health. Arieli will guide you on frequency and home-care recommendations to support and extend your in-studio results between appointments.',
    ],
  },
  'Waxing': {
    paragraphs: [
      'Studio AG offers professional waxing services using high-performance formulations selected for their efficacy and gentleness on the skin. Arieli\'s technique is precise, swift, and designed to minimise discomfort without compromising on the quality or longevity of results.',
      'Every waxing session begins with careful skin preparation and concludes with a soothing post-treatment application to calm and protect. The result is smooth, long-lasting, and professionally finished — nothing rushed, nothing clinical.',
      'From small targeted areas to full treatments, waxing at Studio AG is carried out with full professionalism and meticulous attention to detail. The studio is private, immaculately clean, and designed to put you entirely at ease throughout the process.',
    ],
  },
  'Nails': {
    paragraphs: [
      'Nail treatments at Studio AG go well beyond a standard salon visit. Whether you are looking for a classic, refined finish or something more expressive, Arieli brings the same level of care and precision to your nails as she does to every other treatment at the studio.',
      'Services include manicures, pedicures, and nail art, all performed using premium products and meticulous technique. The focus is always on nail health, natural beauty, and a lasting finish that feels polished, intentional, and elegantly done.',
      'Our nail treatments complement any other Studio AG service beautifully, or work as a standalone appointment to prepare for a special occasion. Book in advance to secure your preferred day and time.',
    ],
  },
  'Eyebrows & Eyelashes': {
    paragraphs: [
      'Brow architecture and lash work are among the most transformative treatments available at Studio AG. Arieli\'s approach is structural — she works with your natural bone structure and facial features to create results that frame and enhance rather than overpower.',
      'Eyebrow shaping at Studio AG is precise, thoughtful, and tailored to your face. Whether your preference is sculpted and defined, naturally soft, or something in between, each shape is designed specifically for you. Lash treatments, including lifts and tints, are applied with equal care and professional-grade products.',
      'These are finishing treatments that make a significant visible difference — clients frequently note how much more defined, open, and expressive their features look after even a single appointment. Ideal for regular maintenance and special occasion preparation alike.',
    ],
  },
}
