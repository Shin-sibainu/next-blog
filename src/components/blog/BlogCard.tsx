import { formatRelativeDate } from "@/lib/dateUtils";
import { Blog } from "@/types/microcms";
import { truncateString } from "@/utils/stringUtils";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: Blog;
  variant?: "featured" | "regular";
};

const BlogCard = ({ post, variant = "regular" }: BlogCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <div
      className={`space-y-3 ${
        isFeatured ? "mx-auto" : "max-w-lg w-full mx-auto"
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.eyecatch.url || "/sample.jpg"}
          alt={post.title || "post eyecatch"}
          width={isFeatured ? 1280 : 400}
          height={isFeatured ? 720 : 300}
          className="object-cover w-full duration-300 hover:scale-105 rounded-xl"
        />
      </Link>
      <div className="flex items-center gap-6 text-slate-500 text-base">
        <div className="flex items-center gap-1">
          <UserCircleIcon className="size-5" />

          <Link href={"/about"} className="hover:text-teal-600 duration-150">
            ShinCode
          </Link>
        </div>
        <time>
          <div className="flex items-center gap-1">
            <CalendarDateRangeIcon className="size-5" />
            <span>{formatRelativeDate(post.publishedAt)}</span>
          </div>
        </time>

        <div className="flex items-center gap-1">
          <Squares2X2Icon className="size-5" />
          <Link
            key={post.categories.id}
            href={`/categories/${post.categories.slug}`}
            className="hover:text-teal-600 duration-150"
          >
            {post.categories.name}
          </Link>
        </div>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block hover:text-teal-600 duration-150"
      >
        <h3
          className={`${
            isFeatured ? "md:text-3xl" : "md:text-2xl"
          } font-medium`}
        >
          {post.title}
        </h3>
      </Link>
      <p className="text-slate-500">{truncateString(post.description, 60)}</p>
    </div>
  );
};

export default BlogCard;
