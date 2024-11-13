import { notFound } from "next/navigation";
import { allPosts } from "@/./.contentlayer/generated";
import { Metadata } from "next";
import { MDXComponent as Mdx, MotionDiv } from "@/components";

const variant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface PageProps {
  params: any; // Use `any` to bypass type checking
}

async function getPostsFromParams(slug: string[]) {
  const slugString = slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slugString);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostsFromParams(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title + " | Posts",
    description: post.description,
  };
}

export async function generateStaticParams() {
  return allPosts.map((thought) => ({
    slug: thought.slugAsParams.split("/"),
  }));
}

export default async function Page({ params }: PageProps) {
  const thought = await getPostsFromParams(params.slug);

  if (!thought) {
    notFound();
  }

  return (
    <MotionDiv
      className="mx-auto mb-20"
      initial="hidden"
      animate="visible"
      variants={variant}
    >
      <article className="prose dark:prose-invert leading-8">
        <h1 className="mt-6 sm:mt-10 mb-2 text-xl sm:text-3xl font-bold ">
          {thought.title}
        </h1>

        <div className="flex gap-x-2 w-full">
          <p className="text-sm sm:text-xl font-normal  mt-0 text-slate-700 dark:text-slate-200">
            {new Date(thought.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            •
          </p>

          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            {thought.readTimeMinutes}
          </p>
        </div>
        <div className="min-w-full">
          <Mdx code={thought.body.code} />
        </div>
      </article>
    </MotionDiv>
  );
}
