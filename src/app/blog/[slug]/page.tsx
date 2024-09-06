import Image from "next/image";
import Link from "next/link";

const BlogDetailPage = () => {
  return (
    <div className="flex flex-col items-center md:my-16 space-y-6 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          How to study Modern Next.js App Router
        </h2>
      </div>

      <div className="flex items-center gap-6 text-slate-500">
        <Link href={"/about"} className="hover:text-teal-600 duration-150">
          ShinCode
        </Link>
        <span>2024/09/04</span>
        <Link href={"/tags"} className="hover:text-teal-600 duration-150">
          Next.js
        </Link>
      </div>

      <div className="w-full">
        <Image
          src={"" || "/sample.jpg"}
          alt={"" || "post eye catch"}
          width={1080}
          height={640}
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora
          possimus, ad iure aspernatur eligendi error odit odio, inventore
          asperiores explicabo deleniti ut rem obcaecati, officia iusto sapiente
          natus tempore rerum quaerat quibusdam. Voluptates perspiciatis maxime
          ad possimus deserunt provident vero obcaecati tempora commodi dolore
          voluptas a excepturi dicta, fugiat cum impedit qui aut quod error
          blanditiis placeat nam. Maxime repellat eius cumque aliquam quis
          suscipit libero ex a vitae ullam voluptatibus nemo non placeat
          perspiciatis asperiores aut eligendi totam inventore sint, qui est. Ea
          id dolore est hic suscipit! Qui suscipit nisi aspernatur, consequatur
          amet nostrum perferendis beatae dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora
          possimus, ad iure aspernatur eligendi error odit odio, inventore
          asperiores explicabo deleniti ut rem obcaecati, officia iusto sapiente
          natus tempore rerum quaerat quibusdam. Voluptates perspiciatis maxime
          ad possimus deserunt provident vero obcaecati tempora commodi dolore
          voluptas a excepturi dicta, fugiat cum impedit qui aut quod error
          blanditiis placeat nam. Maxime repellat eius cumque aliquam quis
          suscipit libero ex a vitae ullam voluptatibus nemo non placeat
          perspiciatis asperiores aut eligendi totam inventore sint, qui est. Ea
          id dolore est hic suscipit! Qui suscipit nisi aspernatur, consequatur
          amet nostrum perferendis beatae dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora
          possimus, ad iure aspernatur eligendi error odit odio, inventore
          asperiores explicabo deleniti ut rem obcaecati, officia iusto sapiente
          natus tempore rerum quaerat quibusdam. Voluptates perspiciatis maxime
          ad possimus deserunt provident vero obcaecati tempora commodi dolore
          voluptas a excepturi dicta, fugiat cum impedit qui aut quod error
          blanditiis placeat nam. Maxime repellat eius cumque aliquam quis
          suscipit libero ex a vitae ullam voluptatibus nemo non placeat
          perspiciatis asperiores aut eligendi totam inventore sint, qui est. Ea
          id dolore est hic suscipit! Qui suscipit nisi aspernatur, consequatur
          amet nostrum perferendis beatae dicta.
        </p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
