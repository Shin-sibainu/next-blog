import BlogList from "@/components/blog/BlogList";
import FeaturedPost from "@/components/blog/FeaturedPost";
import Pagination from "@/components/ui/Pagination";
import { getBlogPosts, getFeaturedPost } from "@/lib/microcms";

const POSTS_PER_PAGE = 4;

export default async function Home() {
  const featuredPost = await getFeaturedPost();
  const { contents: posts, totalCount } = await getBlogPosts({
    limit: POSTS_PER_PAGE,
  });

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <div className="my-10 max-w-3xl mx-auto">
      <div>
        <FeaturedPost post={featuredPost} />
      </div>

      <div className="my-10">
        <BlogList posts={posts} />
      </div>

      <div>
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </div>
  );
}
