import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="space-y-4 max-w-lg w-full mx-auto">
      <Link href={`/blog/slug1`} className="block overflow-hidden rounded-xl">
        <div className="relative w-full pt-[56.25%] overflow-hidden group">
          <Image
            src={"" || "/sample.jpg"}
            alt={"" || "post eyecatch"}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex items-center gap-6 text-slate-500">
        <Link href={"/about"} className="hover:text-teal-600 duration-150">
          ShinCode
        </Link>
        <span>2024/09/04</span>
        <Link href={"/tags"} className="hover:text-teal-600 duration-150">
          Next.js
        </Link>
      </div>
      <Link
        href={"/blog/slug1"}
        className="inline-block hover:text-teal-600 duration-150"
      >
        <h3 className="md:text-2xl font-medium">
          How to study Modern Next.js App Router
        </h3>
      </Link>
      <p className="text-slate-500">
        Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
      </p>
    </div>
  );
};

export default BlogCard;
