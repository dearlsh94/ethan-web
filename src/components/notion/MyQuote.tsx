import * as React from 'react'
import '../../scss/components.scss'
import { TextBlock } from '../../types'
import Paragraph from './Paragraph'

interface Props {
  quote?: TextBlock
}

const MyQuote = ({ quote }: Props) => {
  return (
    <React.Fragment>
      {quote && (
        <div className={`block-quote`}>
          <Paragraph paragraph={quote} />
        </div>
      )}
    </React.Fragment>
  )
}

export default MyQuote