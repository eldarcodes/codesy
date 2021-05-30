import Link from "next/link";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div>
      <Link href="/register">
        <Button primary>Sign up</Button>
      </Link>
      <Link href="/login">
        <Button>Sign in</Button>
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
