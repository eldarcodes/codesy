import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <p>
      <Link href="/register">
        <a>register</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
