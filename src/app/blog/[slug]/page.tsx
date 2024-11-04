import { getDetailPost } from "@/lib/microcms";

import type { Metadata } from "next";
import { BlogDetail } from "./_containers/blog-detail";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = await getDetailPost(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.eyecatch.url,
          height: post.eyecatch.height,
          width: post.eyecatch.width,
        },
      ],
    },
  };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  return <BlogDetail slug={params.slug} />;
};

export default BlogDetailPage;
