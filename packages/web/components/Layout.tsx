import React, { ReactNode } from "react";
import Head from "next/head";

type TLayoutProps = {
  children?: ReactNode;
  title: string;
  showMenu?: boolean;
};

const Layout: React.FC<TLayoutProps> = ({ children, title, showMenu }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>{children}</div>
    </>
  );
};
export default Layout;
