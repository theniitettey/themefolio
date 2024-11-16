import { notFound } from "next/navigation";
import { allPosts } from "@/./.contentlayer/generated";
import { Metadata } from "next";
import { MDXComponent as Mdx, MotionDiv } from "@/components";
import { format } from "date-fns";

interface PostsProps {
  params: Promise<{
    slug: string[];
  }>;
}

const variant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

async function getPostFromParams(slug: string[]): Promise<any | null> {
  const slugString = slug.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slugString);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | The Nii Tettey",
      description: "The requested blog post could not be found.",
    };
  }

  const formattedDate = format(new Date(post.date), "d MMM, yyyy");
  const postTitle = post.title.charAt(0).toUpperCase() + post.title.slice(1);

  return {
    title: `${postTitle} | Blog | The Nii Tettey`,
    description:
      post.description || `Blog post from ${formattedDate} by Nii Tettey`,

    openGraph: {
      type: "article",
      title: postTitle,
      description:
        post.description || `Blog post from ${formattedDate} by Nii Tettey`,
      url: `https://www.theniitettey.live${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Nii Tettey"],
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(
            postTitle
          )}&description=${encodeURIComponent(
            post.description ||
              `Blog post from ${formattedDate}&date=${encodeURIComponent(
                post.date
              )}`
          )}`,
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description:
        post.description || `Blog post from ${formattedDate} by Nii Tettey`,
      creator: "@theniitettey",
      images: [
        `/api/og?title=${encodeURIComponent(
          postTitle
        )}&description=${encodeURIComponent(
          post.description ||
            `Blog post from ${formattedDate}&date=${encodeURIComponent(
              post.date
            )}`
        )}`,
      ],
    },

    alternates: {
      canonical: `https://www.theniitettey.live${post.slug}`,
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostsPage({ params }: PostsProps) {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams.slug);

  if (!post) {
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
        <h1 className="mt-6 sm:mt-10 mb-2 text-xl sm:text-3xl font-bold">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>

        <div className="flex gap-x-2 w-full">
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            •
          </p>
          <p className="text-sm sm:text-xl font-normal mt-0 text-slate-700 dark:text-slate-200">
            {post.readTimeMinutes}
          </p>
        </div>

        <div className="min-w-full">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </MotionDiv>
  );
}
