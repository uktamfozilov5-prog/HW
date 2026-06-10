import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ name: '', email: '' })
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange'])
  const [hovered, setHovered] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
     

      <h2>1. Counter</h2>
      <button onClick={() => setCount(prev => prev + 1)}>
        Clicked {count} times
      </button>

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

      <h2>3. List</h2>
      <ul>
        {items.map(item => (
          <li key={item}>
            <span
              onClick={() => console.log('Clicked:', item)}
              style={{ cursor: 'pointer', marginRight: 8 }}
            >
              {item}
            </span>
            <button onClick={() => setItems(prev => prev.filter(i => i !== item))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2>4. Hover</h2>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? '#eef' : '#fff', padding: 12, border: '1px solid #ccc' }}
      >
        Hover here
      </div>

      <h2>5. Enter</h2>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') console.log('Enter:', inputValue)
        }}
        placeholder="Press Enter"
      />
    </div>
  )
}

export default App
