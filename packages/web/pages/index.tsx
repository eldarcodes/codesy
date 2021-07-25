import Layout from "../components/Layout";
import withApollo from "../lib/withApollo";

const Landing = () => (
  <Layout showMenu title="Codesy">
    index.tsx
  </Layout>
);

export default withApollo({ ssr: false })(Landing);
