import React, { useEffect, useState } from 'react';
import { TableOfContentsBlock, TableOfContentsSide } from '.';
import useResize from '@src/hooks/useResize';

interface TableOfContentsProps {
  target: ('h1' | 'h2' | 'h3')[];
}

export default function TableOfContents({ target }: TableOfContentsProps) {
  const { resizedInnerWidth } = useResize();
  const [tableOfContents, setTableOfContents] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const elHeaders = document.querySelectorAll<HTMLHeadingElement>(target.join(','));
    if (elHeaders && elHeaders?.length > 0) {
      const headers: HTMLHeadingElement[] = [];
      elHeaders.forEach(el => {
        if (!el.className.includes('title')) headers.push(el);
      });
      setTableOfContents(headers);
    }
  }, []);

  return (
    <>
      <TableOfContentsBlock list={tableOfContents} />
      {resizedInnerWidth > 1280 && <TableOfContentsSide list={tableOfContents} />}
    </>
  );
}
