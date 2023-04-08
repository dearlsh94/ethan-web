import * as React from 'react'
import '../../scss/components.scss'

interface Props {
  children: React.ReactNode
  color: 'black' | 'white'
  size?: number
}

const CircleIconWrapper = ({ children, color = 'black', size = 36 }: Props) => {
  return (
    <div
      className={`circle-icon-wrapper ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {children}
    </div>
  )
}

export default CircleIconWrapper