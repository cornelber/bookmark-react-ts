import React, { ReactNode } from "react";
import clx from "classnames";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const containerClassNames = clx("container mx-auto px-6", className);
  return (
    <main className="overflow-x-hidden">
      <div className={containerClassNames}>
        {children}
      </div>
    </main>
  );
};

export default Layout;
