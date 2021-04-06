import React from "react";
import axios from "axios";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";

const Portfolio = ({ portfolio }) => {
  return (
    <Layout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        <span>{portfolio.title}</span>
        <p>{portfolio.body}</p>
        <p>{portfolio.id}</p>
      </BasePage>
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
  return { portfolio: post };
};

export default Portfolio;
