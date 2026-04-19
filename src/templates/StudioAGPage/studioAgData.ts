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
  { label: 'Brow Sculpting' },
  { label: 'Facial Glow Treatment' },
  { label: 'Lash Lift & Tint' },
]

export const studioAgTestimonials = [
  {
    stars: '★★★★★',
    quote:
      'Arieli completely transformed my brows. She took the time to understand my face and the result was better than I ever imagined. I will not go anywhere else.',
    name: 'Sarah M.',
    service: 'Eyebrow Sculpting',
  },
  {
    stars: '★★★★★',
    quote:
      'The facial I had at Studio AG was unlike any I have had before. My skin looked radiant for weeks. The studio itself is so calming and professional.',
    name: 'Ciara R.',
    service: 'Personalised Facial',
  },
  {
    stars: '★★★★★',
    quote:
      'I was nervous about waxing but Arieli made me feel completely at ease. Quick, precise, and virtually painless. Highly recommend to anyone in Dublin.',
    name: 'Aoife K.',
    service: 'Professional Waxing',
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
