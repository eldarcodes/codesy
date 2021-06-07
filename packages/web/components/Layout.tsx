import React, { ReactNode } from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import { PAGE_TITLE_SUFFIX, PAGE_TITLE_DEFAULT } from "../constants";

type TLayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<TLayoutProps> = ({ children, title }) => {
  const titleWithSuffix = title
    ? title + PAGE_TITLE_SUFFIX
    : PAGE_TITLE_DEFAULT;
  return (
    <Container>
      <Head>
        <title>{titleWithSuffix}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </Container>
  );
};
export default Layout;
