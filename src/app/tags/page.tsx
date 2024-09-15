import PageHeader from "@/components/common/PageHeader";
import { getAllTags } from "@/lib/microcms";
import Link from "next/link";

const Tags = async () => {
  const { contents } = await getAllTags();

  return (
    <div className="mx-auto max-w-4xl text-center">
      <PageHeader title="Tags" />
      <div className="flex flex-wrap gap-6 justify-center">
        {contents.map((content) => (
          <Link
            href={`/tags/${content.slug}`}
            key={content.id}
            className="bg-slate-200 px-4 py-2 rounded-md hover:bg-teal-600 duration-150 hover:text-white duration-150"
          >
            # {content.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
