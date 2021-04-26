import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) {
        setError(result);
      } else {
        setData(result);
      }
      setLoading(false);
    };
    url && fetchData();
  }, [url]);

  return { data, error, loading };
};
