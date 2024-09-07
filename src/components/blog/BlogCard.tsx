import { formatRelativeDate } from "@/lib/dateUtils";
import { Blog } from "@/types/microcms";
import { truncateString } from "@/utils/stringUtils";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: Blog;
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="space-y-3 max-w-lg w-full mx-auto">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.eyecatch.url || "/sample.jpg"}
          alt={"" || "post eye catch"}
          width={300}
          height={200}
          className="object-cover w-full duration-300 hover:scale-105 rounded-xl"
        />
      </Link>
      <div className="flex items-center gap-6 text-slate-500">
        <Link href={"/about"} className="hover:text-teal-600 duration-150">
          ShinCode
        </Link>
        <time>{formatRelativeDate(post.publishedAt)}</time>
        <Link
          key={post.category.id}
          href={`/category/${post.category.name}`}
          className="hover:text-teal-600 duration-150"
        >
          {post.category.name}
        </Link>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block hover:text-teal-600 duration-150"
      >
        <h3 className="md:text-2xl font-medium">{post.title}</h3>
      </Link>
      <p className="text-slate-500">{truncateString(post.description, 40)}</p>
    </div>
  );
};

export default BlogCard;
