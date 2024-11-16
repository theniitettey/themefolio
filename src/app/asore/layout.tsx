import type { Metadata } from "next";
import { allAsores } from "@/.contentlayer/generated";

export async function generateMetadata(): Promise<Metadata> {
  const activePosts = allAsores.filter((post) => !post.archived);
  const postCount = activePosts.length;

  let latestPostDate = "";
  if (postCount > 0) {
    const dates = activePosts.map((post) => new Date(post.date));
    const mostRecent = new Date(
      Math.max(...dates.map((date) => date.getTime()))
    );
    latestPostDate = mostRecent.toISOString();
  }

  const topics = [...new Set(activePosts.flatMap((post) => post.tags || []))];
  const topTopics = topics.slice(0, 5).join(", ");

  const title = "Devotionals | The Nii Tettey";
  const description =
    postCount > 0
      ? `Explore ${postCount} devotionals on ${
          topTopics || "various topics"
        }. Quiet time reflections, spiritual insights, and biblical truths by Nii Tettey.`
      : "Personal blog featuring quiet time reflections, spiritual insights, and biblical truths by Nii Tettey.";

  return {
    title,
    description,

    openGraph: {
      type: "website",
      title,
      description,
      url: "https://www.theniitettey.live/asore",
      images: [
        {
          url: "/api/og/asore",
          width: 1200,
          height: 630,
          alt: "The Nii Tettey Devotionals",
        },
      ],
      siteName: "The Nii Tettey",
      ...(latestPostDate && { modifiedTime: latestPostDate }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@theniitettey",
      images: ["/api/og/asore"],
    },

    alternates: {
      canonical: "https://www.theniitettey.live/asore",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    authors: [
      {
        name: "Nii Tettey",
        url: "https://www.theniitettey.live",
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
