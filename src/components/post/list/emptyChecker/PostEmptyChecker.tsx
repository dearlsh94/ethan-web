import { IconClearAll } from '@components/icon';
import React from 'react';
import './PostEmptyChecker.scss';
import { moveToPostsPage } from '@utils/url';

interface PostEmptyCheckerProps extends React.PropsWithChildren {
  length: number;
}
export default function PostEmptyChecker({ length, children }: PostEmptyCheckerProps) {
  return (
    <>
      {length ? (
        <>{children}</>
      ) : (
        <div className="posts-empty">
          <p>검색 결과가 없습니다.</p>
          <p>전체 글들을 둘러보는 건 어떠세요 ?</p>
          <span onClick={() => moveToPostsPage({})}>
            <IconClearAll size={16} />
            전체글 보러가기
          </span>
        </div>
      )}
    </>
  );
}