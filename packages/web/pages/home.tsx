import React from "react";
import { Card, Grid, Icon, Loader, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useListCodeReviewsQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading } = useListCodeReviewsQuery();

  if (loading) {
    return <Loader style={{ margin: "100px auto" }} active inline="centered" />;
  }

  return (
    <Layout>
      <Grid columns={1} padded>
        {data?.listCodeReviews.map((crr) => (
          <Grid.Column key={crr.id}>
            {/* <Segment>
              <div>{crr.notes.slice(0, 150)}</div>
              <div>{crr.owner.email}</div>
            </Segment> */}
            <Card>
              <Card.Content>
                <Card.Header>{crr.owner.username} wants a review</Card.Header>
                <Card.Meta>
                  <span className="date">in {crr.numDays} days</span>
                </Card.Meta>
                <Card.Description>{crr.notes.slice(0, 150)}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href={crr.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="user" />
                  Offer Review
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
