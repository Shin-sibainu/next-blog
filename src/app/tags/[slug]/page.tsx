import BlogList from "@/components/blog/BlogList";
import PageHeader from "@/components/common/PageHeader";
import Pagination from "@/components/ui/Pagination";
import { getPostsByTagSlug } from "@/lib/microcms";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: capitalizedSlug,
  };
}

const POSTS_PER_PAGE = 4;

const DetailTag = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const { contents: posts, totalCount } = await getPostsByTagSlug(slug, {
    limit: POSTS_PER_PAGE,
  });

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="my-10 max-w-3xl mx-auto">
      <PageHeader title={capitalizedSlug} />

      <div className="my-10">
        <BlogList posts={posts} />
      </div>

      <div>
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default DetailTag;
