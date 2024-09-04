import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="space-y-3">
      <Image
        src={"/sample.jpg"}
        alt="post eyecatch"
        width={400}
        height={250}
        className="rounded-xl"
      />
      <div className="flex items-center gap-6">
        <Link href={"/about"}>ShinCode</Link>
        <span>2024/09/04</span>
        <Link href={"/tags"}>Next.js</Link>
      </div>
      <Link
        href={"/blog/slug1"}
        className="inline-block hover:text-teal-600 duration-150"
      >
        <h3 className="md:text-2xl font-medium">
          How to study Modern Next.js App Router
        </h3>
      </Link>
      <p>
        Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
      </p>
    </div>
  );
};

export default BlogCard;
