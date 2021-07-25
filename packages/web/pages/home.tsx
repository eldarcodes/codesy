import React from "react";
import { Button } from "@codesy/ui";
import Layout from "../components/Layout";
import withApollo from "../lib/withApollo";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout showMenu title="Home">
      <Button label="My button" size="large" backgroundColor="red" />
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
