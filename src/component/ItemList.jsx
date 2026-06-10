import { useState } from 'react'

const ItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange'])

  return (
    <div>
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
    </div>
  )
}

export default ItemList
