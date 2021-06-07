import { useRouter } from "next/dist/client/router";
import React from "react";
import { Grid, Loader, Message } from "semantic-ui-react";
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
  const {
    data: listData,
    loading: listLoading,
    error: listError,
  } = useListCodeReviewsQuery();
  const [createOffer] = useCreateOfferMutation({
    refetchQueries: [{ query: ListCodeReviewsDocument }],
  });
  const { data: meData, loading: meLoading, error: meError } = useMeQuery();

  const router = useRouter();

  if (listLoading || meLoading) {
    return <Loader style={{ margin: "100px auto" }} active inline="centered" />;
  }

  if (meError) {
    return (
      <Message warning>
        <p>Login error</p>
      </Message>
    );
  }

  if (listError) {
    return (
      <Message warning>
        <p>Error while loading Code Review list</p>
      </Message>
    );
  }

  return (
    <Layout showMenu title="Home">
      <Grid columns={4} padded>
        {listData?.listCodeReviews.map((codeReview) => (
          <CodeReviewCard
            showOfferButton={
              !!meData?.me?.id && codeReview.ownerId !== meData?.me?.id
            }
            onOfferClick={() => {
              if (meData?.me) {
                createOffer({
                  variables: {
                    input: {
                      userId: meData.me.id,
                      codeReviewId: codeReview.id,
                    },
                  },
                });
              } else {
                router.push("/login");
              }
            }}
            key={codeReview.id}
            codeReview={codeReview}
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
