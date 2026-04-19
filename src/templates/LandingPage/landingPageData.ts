import type { LandingPageBlock } from './LandingPage'

export const landingPageExampleData: LandingPageBlock[] = [
  {
    type: 'hero',
    data: {
      eyebrow: 'Flexible landing system',
      title: 'Reusable page blocks for modern businesses',
      description:
        'Compose premium landing pages for local services, digital offers, personal brands, hospitality, healthcare, real estate and more using the same visual system.',
      actions: [
        { label: 'Start a page', href: '#contact' },
        { label: 'Explore sections', href: '#highlights', variant: 'secondary' },
      ],
    },
  },
  {
    type: 'features',
    data: {
      eyebrow: 'Highlights',
      title: 'Built for broad business scenarios',
      description:
        'The blocks are content-driven, making it easy to swap positioning, offers and calls to action without redesigning the interface.',
      items: [
        {
          eyebrow: 'Adaptable',
          title: 'Business-agnostic structure',
          description:
            'Support multiple industries with the same composition model by changing only the data.',
        },
        {
          eyebrow: 'Reliable',
          title: 'Stable block contracts',
          description:
            'Use predictable props for actions, cards and form fields so human teams and AI systems can assemble pages safely.',
        },
        {
          eyebrow: 'Scalable',
          title: 'Reusable visual language',
          description:
            'Preserve the current tone while extending the system across offers, audiences and acquisition channels.',
        },
      ],
    },
  },
  {
    type: 'services',
    data: {
      eyebrow: 'Offer examples',
      title: 'Model different value propositions',
      description:
        'Present services, packages, benefits or differentiators using the same card-based section.',
      items: [
        {
          eyebrow: 'Service',
          title: 'Local business acquisition',
          description:
            'Highlight availability, trust, territory coverage and clear contact paths.',
        },
        {
          eyebrow: 'Brand',
          title: 'Expert positioning',
          description:
            'Show authority, signature frameworks, testimonials and premium offer framing.',
        },
        {
          eyebrow: 'Digital',
          title: 'Offer conversion',
          description:
            'Organize benefits, proof, urgency and call-to-action sequences into reusable blocks.',
        },
      ],
    },
  },
  {
    type: 'cta',
    data: {
      eyebrow: 'Next step',
      title: 'Turn structured content into production-ready landing pages',
      description:
        'The same section can work as a consultation CTA, booking prompt, lead magnet step or offer transition.',
      actions: [
        { label: 'See contact block', href: '#contact' },
        { label: 'Review page data', href: '#services', variant: 'ghost' },
      ],
    },
  },
  {
    type: 'contact',
    id: 'contact',
    data: {
      title: 'Start a conversation',
      description:
        'Use the same form for quote requests, appointments, consultations, reservations or discovery calls.',
      submitAction: {
        label: 'Send request',
        type: 'submit',
      },
      fields: [
        {
          kind: 'input',
          name: 'name',
          label: 'Name',
          placeholder: 'Your name',
          required: true,
        },
        {
          kind: 'input',
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'you@example.com',
          required: true,
        },
        {
          kind: 'select',
          name: 'interest',
          label: 'What do you need?',
          placeholder: 'Select a topic',
          options: [
            'Strategy session',
            'Website project',
            'Campaign landing page',
            'Service inquiry',
          ],
        },
        {
          kind: 'input',
          name: 'company',
          label: 'Company or brand',
          placeholder: 'Business name',
        },
        {
          kind: 'textarea',
          name: 'message',
          label: 'Project details',
          layout: 'full',
          placeholder: 'Tell us about your goals, offer or audience.',
          rows: 5,
          required: true,
        },
      ],
    },
  },
]
