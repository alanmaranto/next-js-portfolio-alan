import React from "react";
import axios from "axios";
import Layout from "../components/layouts/Layout";

const Portfolios = ({ posts }) => {
  console.log(posts);

  const renderPosts = () => {
    return posts.map((post) => <li key={post.id}>{post.title}</li>);
  };
  return (
    <Layout>
      <div>Hola</div>
      <ul>{renderPosts()}</ul>
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
    console.log(error.message);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
