import React from "react";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "@/hooks/posts/index.js";

const Portfolios = () => {
  const { posts, error, loading } = useGetPosts();

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
        <h1>Hola</h1>
        {loading && <p>Loading...</p>}
        {posts && <ul>{renderPosts()}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </Layout>
  );
};

export default Portfolios;
