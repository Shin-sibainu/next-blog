import { Blog } from "@/types/microcms";
import {
  createClient,
  MicroCMSContentId,
  MicroCMSQueries,
} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

//フィーチャーブログの取得
export const getFeaturedPost = async () => {
  const response = await client.getList({
    endpoint: "next-blog",
    queries: { limit: 1, orders: "-publishedAt" },
  });

  return response.contents[0];
};

//記事一覧の取得
export const getBlogPosts = async (queries?: MicroCMSQueries) => {
  const response = await client.getList({
    endpoint: "next-blog",
    queries: {
      limit: 10,
      offset: 1,
      orders: "-publishedAt",
      ...queries,
    },
  });

  return {
    contents: response.contents,
    totalCount: response.totalCount - 1,
    offset: response.offset,
    limit: response.limit,
  };
};

//詳細記事の取得
export const getDetailPost = async (
  slug: string,
  queries?: MicroCMSQueries
) => {
  try {
    //まずはslugを利用して記事を探す
    const listResponse = await client.getList<Blog>({
      endpoint: "next-blog",
      queries: {
        filters: `slug[equals]${slug}`,
        limit: 1,
      },
    });

    if (listResponse.contents.length > 0) {
      //slugからGetした記事情報のid = contentId
      const contentId = listResponse.contents[0].id;

      const detailResponse = await client.getListDetail<Blog>({
        endpoint: "next-blog",
        contentId,
        queries,
      });

      return detailResponse;
    }

    // slugで見つからない場合は、直接contentIdとして使用
    const detailResponse = await client.getListDetail<Blog>({
      endpoint: "next-blog",
      contentId: slug,
      queries,
    });

    return detailResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//全てのタグを取得
export const getAllTags = async () => {
  const response = await client.getList({
    endpoint: "tags",
    queries: {
      orders: "publishedAt",
    },
  });

  return {
    contents: response.contents,
    totalCount: response.totalCount,
  };
};

//詳細タグから記事一覧の取得
export const getPostsByTagSlug = async (
  slug: string,
  queries?: MicroCMSQueries
) => {
  //slugからそのtagIdを取得
  const response = await client.getList({
    endpoint: "tags",
    queries: { filters: `slug[equals]${slug}`, limit: 1 },
  });

  //slugからGetした記事情報のid = contentId
  const tagId = response.contents[0].id;

  const postsByTagId = await client.getList({
    endpoint: "next-blog",
    queries: {
      filters: `tags[contains]${tagId}`,
      ...queries,
    },
  });

  return {
    contents: postsByTagId.contents,
    totalCount: postsByTagId.totalCount,
  };
};

//全てのカテゴリを取得
export const getAllCategories = async () => {
  const response = await client.getList({
    endpoint: "categories",
    queries: {
      orders: "publishedAt",
    },
  });

  return {
    contents: response.contents,
    totalCount: response.totalCount,
  };
};

export const getPostsByCategorySlug = async (
  slug: string,
  queries?: MicroCMSQueries
) => {
  //slugからそのslugのカテゴリ情報の取得
  const response = await client.getList({
    endpoint: "categories",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  //カテゴリ情報からidを取り出す
  const categoryId = response.contents[0].id;

  const detailCategoryResponse = await client.getList({
    endpoint: "next-blog",
    queries: {
      filters: `categories[equals]${categoryId}`,
      ...queries,
    },
  });

  return {
    contents: detailCategoryResponse.contents,
    totalCount: detailCategoryResponse.totalCount,
  };
};
