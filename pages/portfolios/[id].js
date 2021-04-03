import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";

const Portfolio = () => {
  const { query } = useRouter();
  return (
    <Layout>
      <h1>I am Portfolio Page</h1>
      <h2>{query.id}</h2>
    </Layout>
  );
};

export default Portfolio;
