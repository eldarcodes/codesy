import React from "react";
import { Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useReceivedOffersQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface ViewOffersProps {}

const ViewOffers: React.FC<ViewOffersProps> = ({}) => {
  const { data, loading } = useReceivedOffersQuery();

  return (
    <Layout showMenu title="Offers">
      <Card.Group itemsPerRow={4}>
        {data?.receivedOffers.map((offer, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{offer.sender.username}</Card.Header>
              <Card.Meta>
                <a
                  href={offer.codeReview.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4183c4" }}
                >
                  Code URL
                </a>
              </Card.Meta>
              <Card.Description>{offer.codeReview.notes}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Layout>
  );
};
export default withApollo({ ssr: true })(ViewOffers);
