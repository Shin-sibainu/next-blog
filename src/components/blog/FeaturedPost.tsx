import { formatDate, formatRelativeDate } from "@/lib/dateUtils";
import { Blog } from "@/types/microcms";
import { truncateString } from "@/utils/stringUtils";
import Image from "next/image";
import Link from "next/link";

type FeaturedPostProps = {
  post: Blog;
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="space-y-2 mx-auto">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.eyecatch.url || "/sample.jpg"}
          alt={post.title || "post eyecatch"}
          width={1280}
          height={720}
          className="object-cover w-full duration-300 hover:scale-105 rounded-xl"
        />
      </Link>
      <div className="flex items-center gap-6 text-slate-500">
        <Link href={"/about"} className="hover:text-teal-600 duration-150">
          ShinCode
        </Link>
        <time>{formatRelativeDate(post.publishedAt)}</time>
        <Link
          key={post.categories.id}
          href={`/category/${post.categories.name}`}
          className="hover:text-teal-600 duration-150"
        >
          {post.categories.name}
        </Link>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block hover:text-teal-600 duration-150"
      >
        <h3 className="md:text-3xl font-medium">{post.title}</h3>
      </Link>
      <p className="text-slate-500 text-sm">
        {truncateString(post.description)}
      </p>
    </div>
  );
};

export default FeaturedPost;
