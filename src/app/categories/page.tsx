import PageHeader from "@/components/common/PageHeader";
import { getAllCategories } from "@/lib/microcms";
import Link from "next/link";

const Categories = async () => {
  const { contents } = await getAllCategories();

  return (
    <div className="mx-auto max-w-4xl text-center">
      <PageHeader title="Categories" />
      <div className="flex flex-wrap gap-6 justify-center">
        {contents.map((content) => (
          <Link
            href={`/categories/${content.slug}`}
            key={content.id}
            className="bg-slate-200 px-4 py-2 rounded-md hover:bg-teal-600 duration-150 hover:text-white"
          >
            # {content.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
