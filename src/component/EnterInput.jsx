import { useState } from 'react'

const EnterInput = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
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

export default EnterInput
