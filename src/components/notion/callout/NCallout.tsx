import * as React from 'react';

import './NCallout.scss';

import { NParagraph } from '@components/notion';
import { Contents } from '@components/post';

import { Callout, NotionChildrenType } from '@types';
interface NCalloutProps {
  callout: Callout;
  children: NotionChildrenType[];
}

export default function NCallout({ callout, children = [] }: NCalloutProps) {
  const icon = callout?.icon?.emoji;

  return (
    <aside className={`block-callout`}>
      {icon && <div className="icon-box">{icon}</div>}
      <NParagraph paragraph={callout} />
      {children && children?.length > 0 && <Contents childrens={children} />}
    </aside>
  );
}
