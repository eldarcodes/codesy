import React, { ReactNode } from "react";
import { Container } from "semantic-ui-react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default Layout;
