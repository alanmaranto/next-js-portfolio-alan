import React from "react";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";
import { useGetPosts } from '@/hooks/posts'

const Portfolios = () => {
  const { data, error, loading } = useGetPosts()

  const renderPosts = (posts) => {
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
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </Layout>
  );
};

export default Portfolios;
