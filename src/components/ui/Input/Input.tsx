import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import './Input.css'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  errorText?: string
  helperText?: string
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, errorText, helperText, id, label, required, ...props },
  ref,
) {
  const fallbackId = useId()
  const inputId = id ?? fallbackId
  const hint = errorText ?? helperText

  return (
    <label className="neex-field" htmlFor={inputId}>
      {label ? (
        <span className="neex-field__label">
          {label}
          {required ? <span className="neex-field__required"> *</span> : null}
        </span>
      ) : null}
      <input
        {...props}
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={errorText ? true : props['aria-invalid']}
        className={['neex-input', className ?? ''].filter(Boolean).join(' ')}
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

export default Input
