import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";

const Portfolio = ({ portfolio }) => {
  return (
    <Layout>
      <h1>I am Portfolio Page</h1>
      <span>{portfolio.title}</span>
      <p>{portfolio.body}</p>
      <p>{portfolio.id}</p>
    </Layout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = response.data;
  } catch (error) {
    throw new Error(error.message);
  }
  debugger;
  return { portfolio: post };
};

export default Portfolio;
