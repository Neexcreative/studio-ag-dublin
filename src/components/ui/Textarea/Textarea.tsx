import { forwardRef, useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import '../Input/Input.css'
import './Textarea.css'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorText?: string
  helperText?: string
  label?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, errorText, helperText, id, label, required, rows = 5, ...props },
  ref,
) {
  const fallbackId = useId()
  const textareaId = id ?? fallbackId
  const hint = errorText ?? helperText

  return (
    <label className="neex-field" htmlFor={textareaId}>
      {label ? (
        <span className="neex-field__label">
          {label}
          {required ? <span className="neex-field__required"> *</span> : null}
        </span>
      ) : null}
      <textarea
        {...props}
        ref={ref}
        id={textareaId}
        required={required}
        rows={rows}
        aria-invalid={errorText ? true : props['aria-invalid']}
        className={['neex-textarea', className ?? ''].filter(Boolean).join(' ')}
      />
      {hint ? (
        <span
          className={`neex-field__hint ${errorText ? 'neex-field__hint--error' : ''}`}
        >
          {hint}
        </span>
      ) : null}
    </label>
  )
})

export default Textarea
