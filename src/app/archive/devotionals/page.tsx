"use client";
import { allAsores } from "@/.contentlayer/generated";
import { Asore } from "@/.contentlayer/generated/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const archivedDevotionals = allAsores.filter(
    (devotional) => devotional.archived
  );
  const devotionalCount = archivedDevotionals.length;

  let dateRange = "";
  if (devotionalCount > 0) {
    const dates = archivedDevotionals.map(
      (devotional) => new Date(devotional.date)
    );
    const oldestDevotional = new Date(
      Math.min(...dates.map((date) => date.getTime()))
    );
    const newestDevotional = new Date(
      Math.max(...dates.map((date) => date.getTime()))
    );
    dateRange = `from ${oldestDevotional.getFullYear()} to ${newestDevotional.getFullYear()}`;
  }

  const title = "Devotional Archive | The Nii Tettey";
  const description =
    devotionalCount > 0
      ? `Access ${devotionalCount} archived daily devotionals ${dateRange}. A collection of spiritual reflections and biblical insights by Nii Tettey.`
      : "Archive of past daily devotionals and spiritual reflections by Nii Tettey.";

  return {
    title,
    description,

    openGraph: {
      type: "website",
      title,
      description,
      url: "https://www.theniitettey.live/archive/devotionals",
      images: [
        {
          url: "/api/og/dev-archive",
          width: 1200,
          height: 630,
          alt: "Devotional Archive",
        },
      ],
      siteName: "The Nii Tettey",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@theniitettey",
      images: ["/api/og/dev-archive"],
    },

    alternates: {
      canonical: "https://www.theniitettey.live/archive/devotionals",
    },
    keywords: [
      "daily devotionals",
      "spiritual reflections",
      "Christian devotionals",
      "bible study",
      "spiritual growth",
      "Christian meditation",
      "daily scripture",
      "archived devotionals",
    ],
  };
}

export default function ArchiveDevotionalPage() {
  const sortedDevotionals = allAsores
    .filter((devotional) => devotional.archived)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const [archivedDevotionals, setArchivedDevotionals] =
    useState<Asore[]>(sortedDevotionals);

  useEffect(() => {
    setArchivedDevotionals(sortedDevotionals);
  }, []);

  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold flex gap-2 items-center mt-6 mb-4 cursor-pointer">
        Archived Devotionals
      </h1>
      {archivedDevotionals.length > 0 ? (
        archivedDevotionals.map((devotional) => (
          <article key={devotional._id} className="mb-8">
            <Link
              href={devotional.slug}
              className="flex justify-between items-start"
            >
              <h2
                className="

                text-sm
                sm:text-lg
                text-grey-100
                dark:text-white
                font-medium
              "
              >
                {devotional.title}
              </h2>
            </Link>
            {devotional.description && (
              <p className="text-[0.7rem] sm:text-sm font-light text-ground-600">
                {devotional.description}
              </p>
            )}
          </article>
        ))
      ) : (
        <p className="text-[0.7rem] sm:text-sm font-light text-ground-600">
          No archived devotionals found.
        </p>
      )}
    </div>
  );
}
