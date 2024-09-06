import { createClient, MicroCMSQueries } from "microcms-js-sdk";

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

  return response.contents;
};
