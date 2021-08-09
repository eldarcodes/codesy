import React from "react";
import { Button } from "@codesy/ui";
import Layout from "../components/Layout";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout showMenu title="Home">
      <a href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/github`}>
        <Button label="Login with GitHub" size="large" />
      </a>
    </Layout>
  );
};

export default Home;
