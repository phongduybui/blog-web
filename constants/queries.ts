import QueryString from 'qs';

interface QueryArticlesParams {
  page: number;
  pageSize?: number;
}

export const queryArticles = ({ page, pageSize = 10 }: QueryArticlesParams) => {
  return QueryString.stringify(
    {
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
      pagination: {
        page,
        pageSize,
      },
      sort: ['publishedAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export const querySingleArticle = (slug?: string | string[]) => {
  return QueryString.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export const queryRelatedArticles = (
  category: string,
  currArticleId: number
) => {
  return QueryString.stringify(
    {
      filters: {
        category: {
          name: {
            $eq: category,
          },
        },
        id: {
          $ne: currArticleId,
        },
      },
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: ['publishedAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export const queryArticlesByTerm = (term: string) => {
  return QueryString.stringify(
    {
      filters: {
        title: {
          $containsi: term,
        },
      },
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: ['publishedAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );
};
