import { useState } from 'react'

const HoverBox = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div>
      <h2>4. Hover</h2>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? '#eef' : '#fff', padding: 12, border: '1px solid #ccc' }}
      >
        Hover here
      </div>
    </div>
  )
}

export default HoverBox
