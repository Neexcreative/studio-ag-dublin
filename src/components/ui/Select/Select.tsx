import { forwardRef, useId } from 'react'
import type { ReactNode, SelectHTMLAttributes } from 'react'
import '../Input/Input.css'
import './Select.css'

export type SelectOption = {
  disabled?: boolean
  label: string
  value: string
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children?: ReactNode
  errorText?: string
  helperText?: string
  label?: string
  options?: Array<SelectOption | string>
  placeholder?: string
}

function normalizeOption(option: SelectOption | string): SelectOption {
  return typeof option === 'string'
    ? { label: option, value: option }
    : option
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    children,
    className,
    errorText,
    helperText,
    id,
    label,
    options = [],
    placeholder = 'Select an option',
    required,
    ...props
  },
  ref,
) {
  const fallbackId = useId()
  const selectId = id ?? fallbackId
  const hint = errorText ?? helperText

  return (
    <label className="neex-field" htmlFor={selectId}>
      {label ? (
        <span className="neex-field__label">
          {label}
          {required ? <span className="neex-field__required"> *</span> : null}
        </span>
      ) : null}
      <select
        {...props}
        ref={ref}
        id={selectId}
        required={required}
        aria-invalid={errorText ? true : props['aria-invalid']}
        className={['neex-select', className ?? ''].filter(Boolean).join(' ')}
      >
        {placeholder ? (
          <option value="" disabled={required}>
            {placeholder}
          </option>
        ) : null}
        {children ??
          options.map((option) => {
            const normalizedOption = normalizeOption(option)
            return (
              <option
                key={normalizedOption.value}
                value={normalizedOption.value}
                disabled={normalizedOption.disabled}
              >
                {normalizedOption.label}
              </option>
            )
          })}
      </select>
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

export default Select
