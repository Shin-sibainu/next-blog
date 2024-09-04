import BlogList from "@/components/blog/BlogList";
import FeaturedPost from "@/components/blog/FeaturedPost";

export default function Home() {
  return (
    <div className="my-10 px-4">
      <FeaturedPost />

      <div className="my-10">
        <BlogList />
      </div>
    </div>
  );
}
