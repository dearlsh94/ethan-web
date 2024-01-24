import { HeadFC, PageProps } from 'gatsby';

import * as React from 'react';


import { GlobalPortal } from '@components/GlobalPortal';
import SEO from '@components/header/SEO';
import { Linker } from '@components/ui';

const mainStyles = {
  padding: '40px',
};
const contentStyles = {
  margin: '20px 0px',
};

export const Head: HeadFC = () => {
  return <SEO />;
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <GlobalPortal.Provider>
      <main style={mainStyles}>
        <h1>😔 Page not found</h1>
        <div style={contentStyles}>
          <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
          <p>Sorry. we couldn’t find what you were looking for.</p>
        </div>
        <div>
          <Linker aria-label="홈으로 가기" url="/">
            Go Main
          </Linker>
        </div>
      </main>
    </GlobalPortal.Provider>
  );
};

export default NotFoundPage;
