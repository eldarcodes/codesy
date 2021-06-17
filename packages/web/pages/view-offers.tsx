import React from "react";
import { Header, Button, Card, Message } from "semantic-ui-react";
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
    refetchQueries: [{ query: ReceivedOffersDocument }],
  });

  return (
    <Layout showMenu title="Offers">
      <Header>My Offers</Header>
      <Card.Group itemsPerRow={4}>
        {data?.myOffers.map((offer, index) =>
          offer.status === "complete" ? null : (
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
                <Message
                  positive={offer.status === "approved"}
                  error={offer.status === "declined"}
                  info={offer.status === "inprogress"}
                >
                  <Message.Header>{offer.status}</Message.Header>
                  <p>
                    {offer.status === "approved" &&
                      "You can now start reviewing the code"}
                    {offer.status === "inprogress" &&
                      "We'll let you know when approved/declined"}
                  </p>
                </Message>
                {offer.status === "approved" && (
                  <Card.Content extra>
                    <Button
                      fluid
                      onClick={async () => {
                        await updateOfferStatus({
                          variables: {
                            input: {
                              codeReviewId: offer.codeReviewId,
                              status: "complete",
                              userId: offer.sender.id,
                            },
                          },
                        });
                      }}
                    >
                      Finish reviewing
                    </Button>
                  </Card.Content>
                )}
              </Card.Content>
            </Card>
          )
        )}
      </Card.Group>
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

            {offer.status === "complete" ? (
              <Card.Content extra>
                <Header>Review finished</Header>
              </Card.Content>
            ) : (
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
            )}
          </Card>
        ))}
      </Card.Group>
    </Layout>
  );
};

export default withApollo({ ssr: false })(ViewOffers);
