import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("/api/v1/posts");
      const result = await response.json();

      if (response.status !== 200) {
        setError(result);
      } else {
        setPosts(result);
      }
      setLoading(false)
    };
    getPosts();
  }, []);

  return { posts, error, loading };
};
