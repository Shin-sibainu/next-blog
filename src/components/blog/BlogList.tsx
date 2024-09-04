import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogList;
