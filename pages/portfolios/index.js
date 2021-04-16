import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";

const Portfolios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("/api/v1/posts");
    const data = await response.json();
    setPosts(data);
  };

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

export default Portfolios;
