import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { request } from '../services/request';
import { queryArticlesByTerm } from '../constants/queries';
import { Article } from '../pages/articles/[slug]';
import { Data } from '../pages';
import MiniArticleCard from './MiniArticleCard';
import Link from 'next/link';
import Spinner from './common/Spinner';
import Image from 'next/image';

interface Props {
  isHome?: boolean;
}

const SearchBox = ({ isHome }: Props) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const fetchArticles = (term: string) => {
    const query = queryArticlesByTerm(term);
    setLoading(true);
    request.get<Data<Article[]>>(`/articles?${query}`).then((res) => {
      setArticles(res.data?.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => clearTimeout(timer);
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      fetchArticles(debouncedTerm.trim());
    } else {
      setArticles([]);
    }
  }, [debouncedTerm]);

  return (
    <>
      <div className="relative mr-3 md:mr-0 md:block">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <BiSearch className="text-[#bbb]" />
        </div>
        <input
          type="text"
          value={term}
          onChange={handleTermChange}
          className={clsx(
            'search-input block p-2 pl-10 w-full rounded-lg border sm:text-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-gray-light',
            isHome && 'bg-transparent !border-[#bbb] !text-[#bbb]'
          )}
          placeholder="Search..."
        />

        <div className="hidden z-50 absolute top-12 -left-32 right-0 py-4 px-6 bg-gray shadow-md rounded-md search-results max-h-[460px] overflow-y-auto">
          <h3 className="ml-2 mb-2">{`Results: ${articles.length} items`}</h3>
          {loading && (
            <div className="flex justify-center my-4">
              <Spinner />
            </div>
          )}
          {articles.length > 0 ? (
            articles.map((article) => (
              <Link
                href={`/articles/${article.attributes.slug}`}
                key={article.id}
              >
                <a>
                  <MiniArticleCard article={article} />
                </a>
              </Link>
            ))
          ) : (
            <div className="ml-2 flex justify-center">
              <Image
                width={600}
                height={300}
                src="/images/empty.png"
                alt="empty"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
