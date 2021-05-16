import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
