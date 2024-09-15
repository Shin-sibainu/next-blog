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
  });

  return {
    contents: response.contents,
    totalCount: response.totalCount,
  };
};
