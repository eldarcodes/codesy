import Layout from "../components/Layout";
import withApollo from "../lib/withApollo";

const IndexPage = () => (
  <Layout showMenu>
    <div></div>
  </Layout>
);

export default withApollo({ ssr: true })(IndexPage);
