import { FC, ReactNode } from "react";

export interface BasicLayoutProps {
  children?: ReactNode;
}

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default BasicLayout;
