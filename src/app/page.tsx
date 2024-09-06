import BlogList from "@/components/blog/BlogList";
import FeaturedPost from "@/components/blog/FeaturedPost";
import { getBlogPosts, getFeaturedPost } from "@/lib/microcms";

export default async function Home() {
  const featuredPost = await getFeaturedPost();
  const recentPosts = await getBlogPosts({ limit: 5 }); // 6 - 1 = 5(記事)

  return (
    <div className="my-10 max-w-3xl mx-auto">
      <div>
        <FeaturedPost post={featuredPost} />
      </div>

      <div className="my-10">
        <BlogList initialPosts={recentPosts} />
      </div>
    </div>
  );
}
