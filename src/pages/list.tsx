import * as React from 'react';
import { useEffect, useState } from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import '@scss/global.scss';
import '@scss/pages/PostsPage.scss';
import { NotionNode } from '@types';
import SEO from '@components/header/SEO';
import { GlobalPortal } from '@components/GlobalPortal';
import { compareString } from '@utils/common';
import { getParamValue } from '@utils/url';
import { Posts, PostsDescription, PostsFilter } from '@components/post';
import { Divider, LoadContainer } from '@components/ui';
import { MainLayout } from '@layout/main';
import { useNotion } from '@src/hooks/useNotion';
export const Head: HeadFC = () => {
  return (
    <SEO title={`글 목록`} description={`Write, Explain, Edit, Zip`} pathname="/list">
      <link rel="canonical" href={`https://weezip.treefeely.com/list`} />
    </SEO>
  );
};

const ListPage: React.FC<PageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const { posts } = useNotion();

  const [list, setList] = useState<NotionNode[]>([]);
  const [filterText, setFilterText] = useState('전체');
  const [isLoading, setIsLoading] = useState(true);

  const series = getParamValue(params, 'series');
  const tag = getParamValue(params, 'tag');
  const keyword = getParamValue(params, 'keyword');

  useEffect(() => {
    checkFilter();
    checkFilteredList();
    setIsLoading(false);
  }, [location]);

  const checkFilteredList = () => {
    let _list: NotionNode[] = [];

    if (location.search) {
      _list = posts.filter(post => {
        if (series) {
          return compareString(post?.notionColumn?.series?.name, series);
        } else if (tag) {
          return post?.notionColumn?.tag?.find(t => compareString(t.name, decodeURIComponent(tag)));
        } else if (keyword) {
          return post.notionColumn?.remark?.replaceAll(/ /g, '').toUpperCase().includes(keyword);
        }
        return true;
      });
    } else {
      _list = posts;
    }

    setList(_list);
  };

  const checkFilter = () => {
    setFilterText(series || tag || decodeURIComponent(keyword).replaceAll(/ /g, '').toUpperCase() || '전체');
  };

  return (
    <GlobalPortal.Provider>
      <MainLayout className="posts-layout">
        <section className="posts-layout__header">
          <PostsFilter />
          <PostsDescription isLoading={isLoading} length={list.length} filteredText={filterText} />
        </section>
        <Divider color="primary" height={2} />
        <LoadContainer isLoading={isLoading} isError={false}>
          <Posts list={list} />
        </LoadContainer>
      </MainLayout>
    </GlobalPortal.Provider>
  );
};

export const postQuery = graphql`
  query {
    allNotion {
      edges {
        node {
          id
          databaseName
          title
          json
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default ListPage;
