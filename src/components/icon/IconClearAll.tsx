import * as React from 'react'
import { SVGIcon } from '@types'
import SvgBox from './SvgBox'
import '@scss/components/Icon.scss'

// https://icon-sets.iconify.design/pajamas/clear-all/
const IconClearAll = (props: SVGIcon) => {
  return (
    <SvgBox {...props}>
      <path d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z" />
    </SvgBox>
  )
}

export default IconClearAll
