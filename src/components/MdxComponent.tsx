"use server";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ClassAttributes, HTMLAttributes } from "react";
import { Code } from "bright";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html-light",
};

const components = {
  Image,
  pre: Code,
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadElement>
  ) => <h1 className="text-xl sm:text-3xl font-bold" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h2 {...props} className="text-sm sm:text-xl font-semibold" />,
  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h3 className="text-sm sm:text-lg font-medium" {...props} />,

  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => <p className="text-sm sm:text-lg font-normal" {...props} />,
};

interface MDXComponentProps {
  code: string;
}

const MDXComponent: React.FC<MDXComponentProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponent;
