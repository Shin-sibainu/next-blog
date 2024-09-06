import { Blog } from "@/types/microcms";
import BlogCard from "./BlogCard";

type BlogListProps = {
  initialPosts: Blog[];
};

const BlogList = ({ initialPosts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
      {initialPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
