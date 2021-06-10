import React from "react";
import Layout from "../components/Layout";
import { useReceivedOffersQuery } from "../generated/graphql";
import withApollo from "../lib/withApollo";

interface ViewOffersProps {}

const ViewOffers: React.FC<ViewOffersProps> = ({}) => {
  const { data, loading } = useReceivedOffersQuery();
  console.log(data);
  return <Layout showMenu title="Offers"></Layout>;
};
export default withApollo({ ssr: true })(ViewOffers);
