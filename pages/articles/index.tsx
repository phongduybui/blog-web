import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import PrimaryContent from '../../components/PrimaryContent';
import { fetcher, request } from '../../services/request';
import { Article, Author } from './[slug]';
import { Category, Data } from '../index';
import useSWR from 'swr';
import { queryArticles } from '../../constants/queries';

interface Props {
  articles: Data<Article[]>;
  categories: Data<Category[]>;
  author: Author;
}

const ArticlesPage = ({ articles, categories, author }: Props) => {
  const [page, setPage] = useState(1);
  const query = queryArticles({ page });

  const { data: articlesData } = useSWR<Data<Article[]>>(
    `/articles?${query}`,
    fetcher,
    {
      fallbackData: articles,
    }
  );
  const { data: categoriesData } = useSWR<Data<Category[]>>(
    '/categories',
    fetcher,
    {
      fallbackData: categories,
    }
  );

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <PrimaryContent
      articlesData={articlesData}
      categoriesData={categoriesData}
      page={page}
      onPageChange={onPageChange}
      author={author}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = queryArticles({ page: 1 });
  const { data: articles } = await request.get(`/articles?${query}`);
  const { data: categories } = await request.get('/categories');
  const { data: author } = await request.get('/writers/1');
  return {
    props: {
      articles,
      categories,
      author,
    },
    revalidate: 10,
  };
};

export default ArticlesPage;
