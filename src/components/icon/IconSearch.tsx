import * as React from 'react'
import { SVGIcon } from '@types'
import SvgBox from './SvgBox'
import '@scss/components/Icon.scss'

// https://icon-sets.iconify.design/ic/outline-search/
const IconSearch = (props: SVGIcon) => {
  return (
    <SvgBox {...props}>
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
    </SvgBox>
  )
}

export default IconSearch
