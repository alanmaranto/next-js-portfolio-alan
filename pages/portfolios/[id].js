/* import React from "react";
import Layout from "@/components/layouts/Layout";
import BasePage from "@/components/BasePage";
import { useGetData } from "@/hooks/posts/index.js";
import { useRouter } from "next/router";

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetData(
    router.query.id ? `/api/v1/posts/${router.query.id}` : null
  );
  return (
    <Layout>
      <BasePage>
        {loading && <p>Loading data...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {portfolio && (
          <>
            <h1>I am Portfolio Page</h1>
            <span>{portfolio.title}</span>
            <p>{portfolio.body}</p>
            <p>{portfolio.id}</p>
          </>
        )}
      </BasePage>
    </Layout>
  );
};

export default Portfolio;
 */