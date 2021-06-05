import React from "react";
import { Grid, Loader } from "semantic-ui-react";
import { CodeReviewCard } from "../components/CodeReviewCard";
import Layout from "../components/Layout";
import {
  ListCodeReviewsDocument,
  useCreateOfferMutation,
  useListCodeReviewsQuery,
  useMeQuery,
} from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading } = useListCodeReviewsQuery();
  const [createOffer] = useCreateOfferMutation({
    refetchQueries: [{ query: ListCodeReviewsDocument }],
  });
  // const { data } = useMeQuery();

  if (loading) {
    return <Loader style={{ margin: "100px auto" }} active inline="centered" />;
  }

  return (
    <Layout>
      <Grid columns={4} padded>
        {data?.listCodeReviews.map((codeReview) => (
          <CodeReviewCard key={codeReview.id} codeReview={codeReview} />
        ))}
      </Grid>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
