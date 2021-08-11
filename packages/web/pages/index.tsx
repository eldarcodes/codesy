import { gql } from "@apollo/client";
import { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout";
import { addApolloState, initializeApollo } from "../lib/withApollo";

interface Props {
  data: any;
}

const Landing: NextPage<Props> = ({ data }: Props) => {
  return (
    <Layout showMenu title="Codesy">
      {JSON.stringify(data)}
      my update
    </Layout>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const apolloClient = initializeApollo(null, ctx);

  const { data } = await apolloClient.query({
    query: gql`
      {
        me {
          id
          username
          pictureUrl
          bio
        }
      }
    `,
  });

  return addApolloState(apolloClient, {
    props: { data },
  });
}

export default Landing;
