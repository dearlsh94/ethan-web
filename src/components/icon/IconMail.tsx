import * as React from 'react'

interface Props {
  size?: number
  fill?: string
}

const IconMail = ({ size = 24, fill = 'white' }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 24 24`}>
      <path
        fill={fill}
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
      />
    </svg>
  )
}

export default IconMail
