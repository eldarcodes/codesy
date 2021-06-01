import React from "react";
import { Grid, Loader, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useListCodeReviewRequestsQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading } = useListCodeReviewRequestsQuery();

  if (loading) {
    return <Loader style={{ margin: "100px auto" }} active inline="centered" />;
  }

  return (
    <Layout>
      <Grid columns={1} padded>
        {data?.listCodeReviewRequests.map((crr) => (
          <Grid.Column key={crr.id}>
            <Segment>{crr.id}</Segment>
          </Grid.Column>
        ))}
      </Grid>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
