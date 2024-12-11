"use server";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import React, { ClassAttributes, HTMLAttributes } from "react";
import { Code } from "bright";
import Link from "next/link";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html-light",
};

const components = {
  Image,
  Link,
  pre: Code,
  h1: (
    props: React.HTMLAttributes<HTMLHeadingElement> & 
    React.ClassAttributes<HTMLHeadingElement>
  ) => (
    <h1
      className="text-lg sm:text-2xl font-bold text-grey-100 dark:text-white"
      {...props}
    />
  ),
  h2: (
    props: React.HTMLAttributes<HTMLHeadingElement> & 
    React.ClassAttributes<HTMLHeadingElement>
  ) => (
    <h2
      {...props}
      className="text-sm sm:text-xl font-semibold text-grey-100 dark:text-white"
    />
  ),
  h3: (
    props: React.HTMLAttributes<HTMLHeadingElement> & 
    React.ClassAttributes<HTMLHeadingElement>
  ) => (
    <h3
      className="text-sm sm:text-lg font-medium text-grey-100 dark:text-white"
      {...props}
    />
  ),
  p: (
    props: React.HTMLAttributes<HTMLParagraphElement> & 
    React.ClassAttributes<HTMLParagraphElement>
  ) => (
    <p
      className="text-sm sm:text-lg font-normal text-grey-100 dark:text-white"
      {...props}
    />
  ),
  li: (
    props: React.HTMLAttributes<HTMLLIElement> & 
    React.ClassAttributes<HTMLLIElement>
  ) => (
    <li
      className="text-sm sm:text-lg font-normal text-grey-100 dark:text-white"
      {...props}
    />
  ),
};

interface MDXComponentProps {
  code: string;
}

const MDXComponent: React.FC<MDXComponentProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponent;
