import * as React from 'react';
import { BlockType, NotionChildrenType } from '@types';
import {
  NHeading1,
  NHeading2,
  NHeading3,
  NBookmark,
  NBulletedList,
  NCallout,
  NCode,
  NParagraph,
  NQuote,
  NTodo,
  NToggle,
  NNumberList,
} from '@components/notion';
import NImage from '@components/notion/image/MyImage';
import { Divider } from '@components/ui';

interface ContentBlockRenderProps {
  block: NotionChildrenType;
}

export default function ContentBlockRender({ block }: ContentBlockRenderProps) {
  const { type } = block;
  const render = () => {
    switch (type) {
      case BlockType.PARAGRAPH:
        if (block.paragraph) return <NParagraph paragraph={block.paragraph} />;
        break;
      case BlockType.HEADING_1:
        if (block.heading_1) return <NHeading1 head1={block.heading_1} />;
        break;
      case BlockType.HEADING_2:
        if (block.heading_2) return <NHeading2 head2={block.heading_2} />;
        break;
      case BlockType.HEADING_3:
        if (block.heading_3) return <NHeading3 head3={block.heading_3} />;
        break;
      case BlockType.QUOTE:
        if (block.quote) return <NQuote quote={block.quote} children={block.children} />;
        break;
      case BlockType.BULLETED_LIST_ITEM:
        if (block.bulleted_list_item) return <NBulletedList bulletedListItem={block} />;
        break;
      case BlockType.NUMBERED_LIST_ITEM:
        if (block.numbered_list_item) return <NNumberList numberedListItem={block} />;
        break;
      case BlockType.TODO:
        if (block.to_do) return <NTodo todo={block.to_do} blockId={block.id} />;
        break;
      case BlockType.CALLOUT:
        if (block.callout) return <NCallout callout={block.callout} children={block.children} />;
        break;
      case BlockType.TOGGLE:
        if (block.toggle)
          return <NToggle toggle={block.toggle} hasChild={block.has_children} childList={block.children} />;
        break;
      case BlockType.BOOKMARK:
        if (block.bookmark) return <NBookmark bookmark={block.bookmark} />;
        break;
      case BlockType.CODE:
        if (block.code) return <NCode code={block.code} />;
        break;
      case BlockType.IMAGE:
        if (block.image) return <NImage imageBlock={block} />;
        break;
      case BlockType.DIVIDER:
        if (block.divider) return <Divider />;
        break;
      default:
        break;
    }
    return;
  };
  return render();
}
