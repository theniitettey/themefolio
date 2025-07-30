import { notFound } from "next/navigation";
import { allThoughts } from "@/./.contentlayer/generated";
import { Metadata } from "next";
import { MDXComponent as Mdx, MotionDiv } from "@/components";
import { format } from "date-fns";

interface ThoughtsProps {
  params: Promise<{
    slug: string[];
  }>;
}

const variant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

async function getThoughtsFromParams(slug: string[]): Promise<any | null> {
  const slugString = slug.join("/");
  const thought = allThoughts.find(
    (thought) => thought.slugAsParams === slugString
  );

  if (!thought) {
    return null;
  }

  return thought;
}

export async function generateMetadata({
  params,
}: ThoughtsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const thought = await getThoughtsFromParams(resolvedParams.slug);

  if (!thought) {
    return {
      title: "Post Not Found | The Nii Tettey",
      description: "The requested thought could not be found.",
    };
  }

  const formattedDate = format(new Date(thought.date), "d MMM, yyyy");
  const postTitle =
    thought.title.charAt(0).toUpperCase() + thought.title.slice(1);

  return {
    title: `${postTitle} | Thoughts | The Nii Tettey`,
    description: `Thought for ${formattedDate} by Nii Tettey`,

    openGraph: {
      type: "article",
      title: postTitle,
      description: `Thought for ${formattedDate} by Nii Tettey`,
      url: `https://www.theniitettey.live/${thought.slug}`,
      publishedTime: new Date(thought.date).toISOString(),
      authors: ["Nii Tettey"],
      images: [
        {
          url: `https://www.theniitettey.live/api/og/thoughts?title=${encodeURIComponent(
            postTitle
          )}&date=${encodeURIComponent(thought.date)}`,
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: `Thought for ${formattedDate} by Nii Tettey`,
      creator: "@theniitettey",
      images: [
        `https://www.theniitettey.live/api/og/thoughts?title=${encodeURIComponent(
          postTitle
        )}&date=${encodeURIComponent(thought.date)}`,
      ],
    },

    alternates: {
      canonical: `https://www.theniitettey.live/${thought.slug}`,
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allThoughts.map((thought) => ({
    slug: thought.slugAsParams.split("/"),
  }));
}

export default async function ThoughtPage({ params }: ThoughtsProps) {
  const resolvedParams = await params;
  const thought = await getThoughtsFromParams(resolvedParams.slug);

  if (!thought) {
    notFound();
  }

  return (
    <div className="mb-20">
      <MotionDiv initial="hidden" animate="visible" variants={variant}>
        <article className="py-6 prose dark:prose-invert min-w-[300px] max-w-[1010px]">
          <div className="mb-10">
            <h1 className="mb-2 text-2xl text-grey-100 dark:text-white">
              {thought.title}
            </h1>

            <div className="flex gap-x-2">
              <p className="text-base mt-0 text-slate-700 dark:text-slate-200">
                {new Date(thought.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-base mt-0 text-slate-700 dark:text-slate-200">
                •
              </p>

              <p className="text-base mt-0 text-slate-700 dark:text-slate-200">
                {thought.readTimeMinutes}
              </p>
            </div>
          </div>
          <Mdx code={thought.body.code} />
        </article>
      </MotionDiv>
    </div>
  );
}
