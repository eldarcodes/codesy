import React from "react";
import { Button } from "@codesy/ui";
import Layout from "../components/Layout";
import withApollo from "../lib/withApollo";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout showMenu title="Home">
      <a href="http://localhost:4000/auth/github">
        <Button label="My button" size="large" />
      </a>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
