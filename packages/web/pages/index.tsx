import Link from "next/link";
import Layout from "../components/Layout";
import { Button } from "semantic-ui-react";
import withApollo from "../lib/withApollo";

const Landing = () => (
  <Layout showMenu title="Landing Page | Code Ponder">
    <h1>Code Ponder 🤔</h1>
    <h4>Marketplace for Code Reviews</h4>
    <h2>How it works</h2>
    <ol>
      <li>Coder requests a code review</li>
      <li>Experts offer assistance</li>
      <li>Coder picks favorite expert</li>
      <li>Selected expert receives a request to review the code on github</li>
    </ol>
    <p>
      <Link href="/register">
        <a>
          <Button>Register as a Coder</Button>
        </a>
      </Link>
    </p>
    <p>
      <Link href="/register">
        <a>
          <Button>Register as a Expert</Button>
        </a>
      </Link>
    </p>
  </Layout>
);

export default withApollo({ ssr: false })(Landing);
