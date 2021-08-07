import React from "react";
import { Button } from "@codesy/ui";
import Layout from "../components/Layout";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout showMenu title="Home">
      <a href="http://localhost:4000/auth/github">
        <Button label="Login with GitHub" size="large" />
      </a>
    </Layout>
  );
};

export default Home;
