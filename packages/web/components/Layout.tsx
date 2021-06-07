import React, { ReactNode } from "react";
import { Button, Container, Loader, Menu } from "semantic-ui-react";
import Head from "next/head";
import Link from "next/link";
import { PAGE_TITLE_SUFFIX, PAGE_TITLE_DEFAULT } from "../constants";
import { useMeQuery } from "../generated/graphql";

type TLayoutProps = {
  children?: ReactNode;
  title?: string;
  showMenu?: boolean;
};

const Layout: React.FC<TLayoutProps> = ({ children, title, showMenu }) => {
  const { data, loading } = useMeQuery();
  const titleWithSuffix = title
    ? title + PAGE_TITLE_SUFFIX
    : PAGE_TITLE_DEFAULT;

  const isLoggedIn = !!data?.me;

  return (
    <>
      <Head>
        <title>{titleWithSuffix}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loading ? (
        <Loader style={{ marginTop: 10 }} active inline="centered" />
      ) : showMenu ? (
        <Menu size="large">
          <Link href="/home">
            <Menu.Item>Home</Menu.Item>
          </Link>
          {isLoggedIn && (
            <Link href="/create-code-review">
              <Menu.Item>Request a code review</Menu.Item>
            </Link>
          )}
          {isLoggedIn ? (
            <Menu.Item position="right">{data?.me?.username}</Menu.Item>
          ) : (
            <>
              <Menu.Item position="right">
                <Link href="/login">
                  <Button style={{ marginRight: 5 }}>Sign in</Button>
                </Link>
                <Link href="/register">
                  <Button primary>Sign up</Button>
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      ) : null}
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
