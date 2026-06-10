import { useState } from 'react'

const FormSection = () => {
  const [form, setForm] = useState({ name: '', email: '' })

  return (
    <div>
      <h2>2. Form</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('Form:', form)
        }}
      >
        <div>
          <label>
            Name:
            <input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormSection
