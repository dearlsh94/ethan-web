import * as React from 'react'
import { useEffect, useState } from 'react'
import '@scss/components/FloatBox.scss'
import CircleIconWrapper from '@components/icon/CircleIconWrapper'
import { throttle } from '@utils/commonUtils'
import IconMoveEnd from '@components/icon/IconMoveEnd'

interface Props {
  useTop: boolean
}

const FloatBox = ({ useTop }: Props) => {
  const [status, setStatus] = useState('')

  const moveTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight) {
        setStatus('scroll')
      } else {
        setStatus('')
      }
    }
    const throttledScrollHandler = throttle(scrollHandler)

    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])

  return (
    <div className={`float-box`}>
      {useTop && (
        <div className={`top-button-box ${status}`} onClick={moveTop}>
          <CircleIconWrapper color="secondary">
            <IconMoveEnd direction="top" size={24} fill={'#a7c4bc'} />
          </CircleIconWrapper>
        </div>
      )}
    </div>
  )
}

export default FloatBox
