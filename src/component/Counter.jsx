import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>1. Counter</h2>
      <button onClick={() => setCount(prev => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default Counter
