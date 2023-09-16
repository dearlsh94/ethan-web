import * as React from 'react'
import '@scss/notion.scss'
import { Callout, Children } from '@types'
import { NParagraph } from '@components/notion'
import ContentWrapper from '@module/ContentWrapper'
interface NCalloutProps {
  callout: Callout
  children: Children[]
}

const NCallout = ({ callout, children = [] }: NCalloutProps) => {
  const icon = callout?.icon?.emoji

  return (
    <>
      {callout && (
        <div className={`block-callout`}>
          {icon && <div className="icon-box">{icon}</div>}
          <NParagraph paragraph={callout} />
          {children && children?.length > 0 && <ContentWrapper childrens={children} />}
        </div>
      )}
    </>
  )
}

export default NCallout
