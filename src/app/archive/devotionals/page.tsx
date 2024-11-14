"use client";
import { allAsores } from "@/.contentlayer/generated";
import { Asore } from "@/.contentlayer/generated/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
  });

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
