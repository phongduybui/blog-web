import Avatar from './common/Avatar';
import { BsClock } from 'react-icons/bs';
import { Article } from '../pages/articles/[slug]';
import { getImagePath } from '../utils/image';
import { formatTime } from '../utils/time';
import readingTime from 'reading-time';

interface Props {
  article: Article;
}

const MiniArticleCard = ({ article }: Props) => {
  const articleData = article?.attributes;

  return (
    <div className="bg-white shadow-md flex items-center p-1.5 m-2 rounded-md hover:-translate-y-1 hover:shadow-lg linear duration-300 cursor-pointer border-l-2 border-l-secondary">
      <div className="flex flex-col items-start px-4 py-2">
        <h3 className="text-semi-black font-semibold text-md line-clamp-3">
          {articleData?.title}
        </h3>
        {/* <p className="text-secondary font-sm text-sm mt-3 line-clamp-2">
          {articleData?.description}
        </p> */}
        <div className="flex mt-4 items-center">
          <div>
            <Avatar
              src={getImagePath(
                articleData?.author?.data?.attributes?.picture?.data?.attributes
                  ?.formats?.small?.url
              )}
              blurDataURL={getImagePath(
                articleData?.author?.data?.attributes?.picture?.data?.attributes
                  ?.formats?.thumbnail?.url
              )}
              size={36}
            />
          </div>
          <div className="flex flex-col justify-center pl-4 ">
            <h4 className="text-secondary font-bold text-sm mb-1 hover:text-primary">
              {articleData?.author?.data?.attributes?.name}
            </h4>

            <div className="flex items-center text-gray-light font-normal text-sm">
              <span>{formatTime(articleData?.publishedAt, 'll')}</span>
              <span className="px-2">-</span>
              <span className="flex items-center">
                <BsClock className="mr-2" />{' '}
                {readingTime(articleData?.content)?.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniArticleCard;
