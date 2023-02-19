/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import Container from '../../components/layout/Container';
import { GetStaticPaths, GetStaticProps } from 'next';
import { request } from '../../services/request';
import { getImagePath } from '../../utils/image';
import { formatTime } from '../../utils/time';
import Breadcrumb from '../../components/common/Breadcrumb';
import MarkdownViewer from '../../components/MarkdownViewer';
import readingTime from 'reading-time';
import Avatar from '../../components/common/Avatar';
import {
  queryRelatedArticles,
  querySingleArticle,
} from '../../constants/queries';
import { RiAdvertisementFill } from 'react-icons/ri';
import TopicTag from '../../components/common/TopicTag';
import { MdOutlineDocumentScanner, MdTipsAndUpdates } from 'react-icons/md';
import Link from 'next/link';
import MiniArticleCard from '../../components/MiniArticleCard';
import SocialGroup from '../../components/SocialGroup';

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: Author;
    image: Image;
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}

interface Image {
  data: {
    attributes: {
      url: string;
      formats: {
        thumbnail: {
          url: string;
        };
        small: {
          url: string;
        };
        medium: {
          url: string;
        };
        large: {
          url: string;
        };
      };
    };
  };
}

export interface AttributesAuthor {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  picture: Image;
  social?: {
    youtube: string;
    facebook: string;
    instagram: string;
  };
}

export interface Author {
  data: {
    id: number;
    attributes: AttributesAuthor;
  };
}

interface Props {
  article: Article;
  relatedArticles: Article[];
}

const ArticlePage = ({ article, relatedArticles }: Props) => {
  const articleData = article?.attributes;
  return (
    <Container className="bg-semi-gray pt-16 pb-36">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/articles">Articles</Breadcrumb.Item>
        <Breadcrumb.Item href={`/articles/${articleData?.slug}`} isCurrent>
          {articleData?.title?.length > 60
            ? articleData?.title?.substring(0, 60) + '...'
            : articleData?.title}
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Article Info */}
      <div className="mb-16 mt-12">
        <h1 className="font-black text-5xl text-semi-black mb-4 leading-[1.33]">
          {articleData?.title}
        </h1>
        <div className="flex text-secondary pb-8 mb-8 border-b-2 border-stone-200">
          <p>
            By{' '}
            <span className="font-bold text-secondary hover:text-primary">
              {articleData?.author?.data?.attributes?.name}
            </span>
          </p>
          <span className="px-1">・</span>
          <p>
            Published in{' '}
            <span className="capitalize font-bold text-secondary hover:text-primary">
              {articleData?.category?.data?.attributes?.name}
            </span>
          </p>
          <span className="px-1">・</span>
          <p>{formatTime(articleData?.publishedAt)}</p>
          <span className="text-red-500 px-1">・</span>
          <p className="text-red-500 font-bold">
            {readingTime(articleData?.content)?.text}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-12 md:col-span-8">
          <div className="flex justify-center shadow rounded-t-3xl relative">
            <div className="absolute inset-0 z-50 bg-slate-900 opacity-20 rounded-t-3xl article-hero-image" />
            <Image
              priority
              placeholder="blur"
              blurDataURL={getImagePath(
                articleData?.image?.data?.attributes?.formats?.medium?.url
              )}
              src={getImagePath(articleData?.image?.data?.attributes?.url)}
              alt="img"
              width={1600}
              height={720}
              // layout="responsive"
              objectFit="cover"
              className="rounded-t-3xl transition duration-500  ease-in-out"
            />
          </div>
          <div className="bg-white py-8 px-8 shadow">
            {/* Article Content */}
            <div id="viewer">
              <MarkdownViewer content={articleData?.content} />
            </div>
          </div>
        </div>
        <div className="hidden col-span-4 md:block">
          <div className="rounded-3xl bg-white  text-center shadow">
            <div className="px-8 py-4 w-full bg-[url('/images/bg-sky-crop.jpg')]  bg-fixed bg-no-repeat bg-cover rounded-t-3xl">
              <Avatar
                src={getImagePath(
                  articleData?.author?.data?.attributes?.picture?.data
                    ?.attributes?.url
                )}
                blurDataURL={getImagePath(
                  articleData?.author?.data?.attributes?.picture?.data
                    ?.attributes?.formats?.thumbnail?.url
                )}
                size={170}
              />
            </div>
            <div className="px-8 pb-5">
              <h3 className="text-primary hover:text-semi-black text-lg font-bold mt-3">
                {articleData?.author?.data?.attributes?.name}
              </h3>
              <p className="text-secondary text-sm font-medium my-2">
                {articleData?.author?.data?.attributes?.email}
              </p>
              <div className="flex justify-center flex-wrap space-x-2 mt-3">
                <SocialGroup
                  facebook={
                    articleData?.author?.data?.attributes?.social?.facebook
                  }
                  youtube={
                    articleData?.author?.data?.attributes?.social?.youtube
                  }
                  insta={
                    articleData?.author?.data?.attributes?.social?.instagram
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-14 mb-8">
            <h2 className="text-center font-bold text-2xl text-secondary  mb-8">
              Topics
            </h2>
            <div>
              <TopicTag
                topic="Case Studies"
                icon={<MdOutlineDocumentScanner />}
              />
              <TopicTag topic="Advertising" icon={<RiAdvertisementFill />} />
              <TopicTag topic="Innovation" icon={<MdTipsAndUpdates />} />
            </div>
          </div>
          <div className="mt-14 mb-2 sticky top-7">
            {relatedArticles?.length > 0 && (
              <>
                <h2 className="text-center font-bold text-2xl text-secondary  mb-8">
                  Related Articles
                </h2>
                <div className="flex flex-col space-y-0">
                  {relatedArticles?.map((article) => (
                    <Link
                      href={`/articles/${article.attributes.slug}`}
                      key={article.id}
                    >
                      <a>
                        <MiniArticleCard article={article} />
                      </a>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: articles } = await request.get('/articles');
  const paths = articles?.data?.map((article: Article) => {
    return {
      params: {
        slug: article.attributes.slug,
      },
    };
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = querySingleArticle(context.params?.slug);
  const { data: res } = await request.get(`/articles?${query}`);

  const category = res.data?.[0]?.attributes?.category?.data?.attributes?.name;
  const currentArticleId = res.data?.[0]?.id;

  const queryRelated = queryRelatedArticles(category, currentArticleId);

  const { data: relatedArticles } = await request.get(
    `/articles?${queryRelated}`
  );

  return {
    props: {
      article: res.data?.[0],
      relatedArticles: relatedArticles?.data,
    },
    revalidate: 10,
  };
};

export default ArticlePage;
