import React, { ReactNode } from "react";
import {
  Button,
  Container,
  Icon,
  Label,
  Loader,
  Menu,
} from "semantic-ui-react";
import Head from "next/head";
import Link from "next/link";
import { PAGE_TITLE_SUFFIX, PAGE_TITLE_DEFAULT } from "../constants";
import {
  MeDocument,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";
import { useRouter } from "next/router";

type TLayoutProps = {
  children?: ReactNode;
  title?: string;
  showMenu?: boolean;
};

const Layout: React.FC<TLayoutProps> = ({ children, title, showMenu }) => {
  const { data, loading } = useMeQuery();
  const [logout] = useLogoutMutation({
    update: (store) => {
      store.writeQuery({
        query: MeDocument,
        data: {
          me: null,
        },
      });
    },
  });

  const router = useRouter();

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
            <Menu.Item position="right">
              <Button as="div" labelPosition="right">
                <Button color="green">
                  <Icon name="user" />
                  {data?.me?.username}
                </Button>
                <Label
                  onClick={async () => {
                    await logout();
                    router.push("/home");
                  }}
                  as="a"
                  basic
                  pointing="left"
                >
                  Logout
                </Label>
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Button.Group>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
                <Button.Or />
                <Link href="/register">
                  <Button positive>Register</Button>
                </Link>
              </Button.Group>
            </Menu.Item>
          )}
        </Menu>
      ) : null}
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
