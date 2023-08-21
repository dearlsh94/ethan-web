import * as React from 'react'
import { SVGIcon } from '@types'
import SvgBox from './SvgBox'
import '@scss/components/Icon.scss'

// https://icon-sets.iconify.design/fluent-mdl2/progress-ring-dots/
const IconCircleProgress = (props: SVGIcon) => {
  return (
    <SvgBox {...props}>
      <path d="M1024 96q33 0 62 12t51 35t34 51t13 62q0 33-12 62t-35 51t-51 34t-62 13q-33 0-62-12t-51-35t-34-51t-13-62q0-33 12-62t35-51t51-34t62-13zM337 481q0-30 11-56t30-45t46-31t57-12q30 0 56 11t45 31t31 46t12 56q0 30-11 56t-31 46t-46 31t-56 11q-30 0-56-11t-46-30t-31-46t-11-57zm-81 415q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10zm113 671q0-23 9-43t24-36t35-24t44-9q23 0 43 9t36 24t24 35t9 44q0 23-9 43t-24 36t-35 24t-44 9q-23 0-43-9t-36-24t-24-35t-9-44zm655 129q40 0 68 28t28 68q0 40-28 68t-68 28q-40 0-68-28t-28-68q0-40 28-68t68-28zm463-129q0-34 23-57t57-23q34 0 57 23t23 57q0 34-23 57t-57 23q-34 0-57-23t-23-57zm305-607q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19zm-225-655q36 0 68 14t56 38t38 56t14 68q0 36-14 68t-38 56t-56 38t-68 14q-36 0-68-14t-56-38t-38-56t-14-68q0-36 14-68t38-56t56-38t68-14z" />
    </SvgBox>
  )
}

export default IconCircleProgress
