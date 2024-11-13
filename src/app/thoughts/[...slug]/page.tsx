import { notFound } from "next/navigation";
import { allThoughts } from "@/./.contentlayer/generated";

import { Metadata } from "next";
import { MDXComponent as Mdx, MotionDiv } from "@/components";

interface ThoughtsProps {
  params: {
    slug: string[];
  };
}

const variant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

async function getThoughtsFromParams(params: ThoughtsProps["params"]) {
  const slug = params?.slug?.join("/");
  const thought = allThoughts.find((thought) => thought.slugAsParams === slug);

  if (!thought) {
    return null;
  }

  return thought;
}

export async function generateMetadata({
  params,
}: ThoughtsProps): Promise<Metadata> {
  const thought = await getThoughtsFromParams(params);

  if (!thought) {
    return {};
  }

  return {
    title: thought.title,
  };
}

export async function generateStaticParams(): Promise<
  ThoughtsProps["params"][]
> {
  return allThoughts.map((thought) => ({
    slug: thought.slugAsParams.split("/"),
  }));
}

export default async function ThoughtPage({ params }: ThoughtsProps) {
  const thought = await getThoughtsFromParams(params);

  if (!thought) {
    notFound();
  }

  return (
    <MotionDiv
      className="mx-auto"
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
