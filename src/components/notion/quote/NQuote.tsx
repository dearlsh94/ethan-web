import * as React from 'react';

import './NQuote.scss';

import { NParagraph } from '@components/notion';
import { Contents } from '@components/post';

import { NotionChildrenType, TextBlock } from '@types';

interface NQuoteProps {
  quote?: TextBlock;
  children: NotionChildrenType[];
}

export default function NQuote({ quote, children }: NQuoteProps) {
  return (
    <blockquote className={`block-quote`}>
      <NParagraph paragraph={quote} />
      {children && children?.length && <Contents childrens={children} />}
    </blockquote>
  );
}
