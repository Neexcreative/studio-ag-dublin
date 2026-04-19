import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders data-driven fields and submit action', () => {
    const html = renderToStaticMarkup(
      <ContactForm
        title="Contact us"
        submitAction={{ label: 'Submit request', type: 'submit' }}
        fields={[
          {
            kind: 'input',
            name: 'name',
            label: 'Name',
            placeholder: 'Your name',
          },
          {
            kind: 'select',
            name: 'interest',
            label: 'Interest',
            options: ['Consultation', 'Proposal'],
          },
          {
            kind: 'textarea',
            name: 'message',
            label: 'Message',
            layout: 'full',
          },
        ]}
      />,
    )

    expect(html).toContain('Contact us')
    expect(html).toContain('Consultation')
    expect(html).toContain('Submit request')
  })
})
