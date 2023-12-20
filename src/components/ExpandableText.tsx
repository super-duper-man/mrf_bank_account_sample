import { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  maxChar: number;
  number?: boolean;
};
const ExpandableText = ({ children, maxChar, number }: Props) => {
  if (children && children.toString().length <= maxChar) return children;

  const text = children?.toString().substring(0, maxChar);
  return <>{number ? <>...{text}</> : <>{text}...</>}</>;
};

export default ExpandableText;
