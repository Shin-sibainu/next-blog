import { getDetailPost } from "@/lib/microcms";
import BlogDetailPresentation from "./presentational";

export const BlogDetailContainer = async ({ slug }: { slug: string }) => {
  const post = await getDetailPost(slug);

  return <BlogDetailPresentation post={post} />;
};
