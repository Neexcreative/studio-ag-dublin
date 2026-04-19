import './ContactForm.css'
import { Button, Input, Select, Textarea } from '../../ui'
import type { SelectOption } from '../../ui'
import type { BlockAction } from '../types'

type FieldLayout = 'full' | 'half'

type ContactFieldBase = {
  defaultValue?: string
  helperText?: string
  id?: string
  label: string
  layout?: FieldLayout
  name: string
  placeholder?: string
  required?: boolean
}

type ContactInputField = ContactFieldBase & {
  autoComplete?: string
  kind: 'input'
  type?: 'email' | 'number' | 'tel' | 'text' | 'url'
}

type ContactSelectField = ContactFieldBase & {
  kind: 'select'
  options: Array<SelectOption | string>
}

type ContactTextareaField = ContactFieldBase & {
  kind: 'textarea'
  rows?: number
}

export type ContactFormField =
  | ContactInputField
  | ContactSelectField
  | ContactTextareaField

export type ContactFormProps = {
  action?: string
  description?: string
  fields: ContactFormField[]
  method?: 'get' | 'post'
  submitAction?: BlockAction
  title: string
}

function ContactForm({
  action,
  description,
  fields,
  method = 'post',
  submitAction = { label: 'Send message', type: 'submit' },
  title,
}: ContactFormProps) {
  return (
    <form className="neex-form" action={action} method={method}>
      <div className="neex-form__header">
        <h2 className="neex-form-title">{title}</h2>
        {description ? <p className="neex-form-description">{description}</p> : null}
      </div>

      <div className="neex-form-grid">
        {fields.map((field) => {
          const fieldClassName =
            field.layout === 'full' || field.kind === 'textarea'
              ? 'neex-form-grid__item neex-form-grid__item--full'
              : 'neex-form-grid__item'

          if (field.kind === 'select') {
            return (
              <div key={field.id ?? field.name} className={fieldClassName}>
                <Select
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  options={field.options}
                  defaultValue={field.defaultValue ?? ''}
                  placeholder={field.placeholder ?? 'Select an option'}
                  required={field.required}
                  helperText={field.helperText}
                />
              </div>
            )
          }

          if (field.kind === 'textarea') {
            return (
              <div key={field.id ?? field.name} className={fieldClassName}>
                <Textarea
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                  required={field.required}
                  helperText={field.helperText}
                  rows={field.rows ?? 5}
                />
              </div>
            )
          }

          return (
            <div key={field.id ?? field.name} className={fieldClassName}>
              <Input
                name={field.name}
                id={field.id}
                label={field.label}
                type={field.type ?? 'text'}
                autoComplete={field.autoComplete}
                defaultValue={field.defaultValue}
                placeholder={field.placeholder}
                required={field.required}
                helperText={field.helperText}
              />
            </div>
          )
        })}
      </div>

      <Button {...submitAction} fullWidth={true}>
        {submitAction.label}
      </Button>
    </form>
  )
}

export default ContactForm
