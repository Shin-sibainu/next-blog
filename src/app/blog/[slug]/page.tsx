import { getDetailPost } from "@/lib/microcms";
import { formatRelativeDate } from "@/lib/dateUtils";

import Image from "next/image";
import Link from "next/link";

import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/outline";

import parse from "html-react-parser";
import StyledContent from "@/components/common/StyledContent";

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getDetailPost(slug);

  return (
    <div className="flex flex-col items-center md:my-16 space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">{post.title}</h2>
      </div>

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
            key={post.category.id}
            href={`/category/${post.category.name}`}
            className="hover:text-teal-600 duration-150"
          >
            {post.category.name}
          </Link>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={post.eyecatch.url || "/sample.jpg"}
          alt={post.title || "post eye catch"}
          width={1200}
          height={630}
          className="object-cover rounded-xl"
        />
      </div>

      <StyledContent content={post.content} />
    </div>
  );
};

export default BlogDetailPage;
