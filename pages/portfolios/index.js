import React from "react";
import Link from "next/link";
import axios from "axios";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <Layout>
      <BasePage>
        <div>Hola</div>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </Layout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = response.data;
  } catch (error) {
    throw new Error(error.message);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
