import React from 'react';
import { TagItem } from '@components/post';
import './TagsFilter.scss';
import { useNotion } from '@src/hooks/useNotion';

export default function TagsFilter() {
  const { everyPostsTags } = useNotion();
  return (
    everyPostsTags?.length > 0 && (
      <div className="tag filter">
        <p className="title">태그</p>
        {everyPostsTags.map(name => (
          <TagItem key={name} name={name} useLink={true} />
        ))}
      </div>
    )
  );
}
