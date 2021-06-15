import React from "react";
import { Header, Button, Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import {
  ReceivedOffersDocument,
  ReceivedOffersQuery,
  useReceivedOffersQuery,
  useUpdateOfferStatusMutation,
} from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface ViewOffersProps {}

const ViewOffers: React.FC<ViewOffersProps> = ({}) => {
  const { data } = useReceivedOffersQuery();
  const [updateOfferStatus] = useUpdateOfferStatusMutation({
    update: (store, { data }) => {
      if (!data || !data?.updateOfferStatus.offer) {
        return null;
      }

      const { offer } = data.updateOfferStatus;
      const query = store.readQuery<ReceivedOffersQuery>({
        query: ReceivedOffersDocument,
      });
      console.log(query, data.updateOfferStatus);

      store.writeQuery({
        query: ReceivedOffersDocument,
        data: {
          ...query,
          receivedOffers: query?.receivedOffers.map((x) =>
            x.codeReview.id === offer.codeReview.id &&
            x.sender.id === offer.sender.id
              ? offer
              : x
          ),
        },
      });
    },
  });

  return (
    <Layout showMenu title="Offers">
      <Header>My Code Reviews</Header>
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
                <Button
                  color="green"
                  basic={offer.status !== "approved"}
                  onClick={async () => {
                    await updateOfferStatus({
                      variables: {
                        input: {
                          codeReviewId: offer.codeReviewId,
                          status: "approved",
                          userId: offer.sender.id,
                        },
                      },
                    });
                  }}
                >
                  Approve
                </Button>
                <Button
                  color="red"
                  basic={offer.status !== "declined"}
                  onClick={async () => {
                    await updateOfferStatus({
                      variables: {
                        input: {
                          codeReviewId: offer.codeReviewId,
                          status: "declined",
                          userId: offer.sender.id,
                        },
                      },
                    });
                  }}
                >
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

export default withApollo({ ssr: false })(ViewOffers);
