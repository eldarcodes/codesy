import React from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import { MAX_NOTES_CHAR_COUNT } from "../contstants";
import { CodeReview } from "../generated/graphql";

interface CodeReviewCardProps {
  codeReview: CodeReview;
}

export const CodeReviewCard: React.FC<CodeReviewCardProps> = ({
  codeReview = {},
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
        <Card.Content extra>
          <a
            href={codeReview.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="user" />
            Offer Review
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
