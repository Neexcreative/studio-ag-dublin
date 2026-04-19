import type { Meta, StoryObj } from '@storybook/react-vite'
import ContactForm from './ContactForm'

const meta: Meta<typeof ContactForm> = {
  title: 'NEEX/Blocks/ContactForm',
  component: ContactForm,
}

export default meta

type Story = StoryObj<typeof ContactForm>

export const Default: Story = {
  args: {
    title: 'Start a conversation',
    description:
      'Capture leads for quotes, bookings, applications, appointments or discovery calls.',
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
        label: 'What are you interested in?',
        placeholder: 'Select a topic',
        options: ['Consultation', 'Website', 'Campaign', 'General inquiry'],
      },
      {
        kind: 'input',
        name: 'brand',
        label: 'Company or brand',
        placeholder: 'Business name',
      },
      {
        kind: 'textarea',
        name: 'message',
        label: 'Message',
        layout: 'full',
        placeholder: 'Tell us what you need.',
      },
    ],
  },
}
