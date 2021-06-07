import React from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import { MAX_NOTES_CHAR_COUNT } from "../contstants";
import { CodeReview, MeQuery, User } from "../generated/graphql";

interface CodeReviewCardProps {
  codeReview: CodeReview;
  onOfferClick: () => void;
  showOfferButton: boolean;
}

export const CodeReviewCard: React.FC<CodeReviewCardProps> = ({
  codeReview = {},
  onOfferClick,
  showOfferButton,
}) => {
  return (
    <Grid.Column key={codeReview.id}>
      <Card style={{ height: "100%" }}>
        <Card.Content>
          <Card.Header>{codeReview.owner?.username} wants a review</Card.Header>
          <Card.Meta>
            <span className="date">in {codeReview.numDays} days</span>
          </Card.Meta>
          <Card.Description>
            {codeReview.notes!.slice(0, MAX_NOTES_CHAR_COUNT)}
            {codeReview.notes!.length > MAX_NOTES_CHAR_COUNT ? "..." : ""}
          </Card.Description>
        </Card.Content>
        {showOfferButton && (
          <Card.Content extra>
            <a onClick={onOfferClick}>
              <Icon name="user" />
              Offer Review
            </a>
          </Card.Content>
        )}
      </Card>
    </Grid.Column>
  );
};
