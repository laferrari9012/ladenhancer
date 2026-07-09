import { useState } from 'react'

type ToggleProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export default function Toggle({ checked, defaultChecked = false, onChange }: ToggleProps) {
  const [internal, setInternal] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const value = isControlled ? checked : internal

  function handleClick() {
    const next = !value
    if (!isControlled) setInternal(next)
    onChange?.(next)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      onClick={handleClick}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
        value ? 'bg-teal-500' : 'bg-ink-600'
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-paper-100 shadow-md transition-transform duration-300 ease-out ${
          value ? 'translate-x-[22px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}
