import BlogList from "@/components/blog/BlogList";
import Pagination from "@/components/ui/Pagination";
import { getBlogPosts } from "@/lib/microcms";
import { notFound, redirect } from "next/navigation";

const POSTS_PER_PAGE = 4;

const Page = async ({ params }: { params: { page: string } }) => {
  const currentPage = Number(params.page);
  const offset = (currentPage - 1) * POSTS_PER_PAGE + 1;

  if (currentPage === 1) {
    redirect("/");
  }

  const { contents: posts, totalCount } = await getBlogPosts({
    limit: POSTS_PER_PAGE,
    offset,
  });

  if (!posts.length) {
    notFound();
  }

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <div className="my-10 max-w-3xl mx-auto">
      <div>
        <BlogList posts={posts} />
      </div>

      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
