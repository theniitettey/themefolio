import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
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
  ) => <h1 className="text-4xl font-bold" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h2 {...props} className="text-3xl font-semibold" />,
  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h3 className="text-2xl font-medium" {...props} />,
};

interface MDXComponentProps {
  code: string;
}

const MDXComponent: React.FC<MDXComponentProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXComponent;
