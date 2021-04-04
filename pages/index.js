import React from "react";
import Layout from "../components/layouts/Layout";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Button color="danger">Danger</Button>
      </Container>
    </Layout>
  );
};

export default Home;
