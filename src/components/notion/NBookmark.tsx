import * as React from 'react'
import '@scss/notion.scss'
import { Bookmark, TextBlock, TextItem } from '@types'
import Linker from '@components/ui/Linker'
import { NParagraph } from '@components/notion'
interface Props {
  bookmark: Bookmark
}

const NBookmark = ({ bookmark }: Props) => {
  return (
    <React.Fragment>
      {bookmark && (
        <Linker url={bookmark.url} target="_blank">
          {bookmark.caption?.length > 0 ? (
            bookmark.caption.map((c: TextItem, i) => {
              const captionParagraph: TextBlock = {
                color: 'gray',
                text: [c],
              }
              return (
                <span key={`bookmark-caption-${i}`}>
                  <NParagraph paragraph={captionParagraph} />
                </span>
              )
            })
          ) : (
            <span>{bookmark.url}</span>
          )}
        </Linker>
      )}
    </React.Fragment>
  )
}

export default NBookmark
