import React from "react";
import Layout from "../components/layouts/Layout";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Button color="danger">Danger</Button>
        <div className="parent-class sibling-class">
          <h1>Hi</h1>
          <h2>2</h2>
          <div className="child-class">Hello</div>
          <div className="parent-class-title">Bye</div>
          <div className="parent-class-date">Bye</div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
