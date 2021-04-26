import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  try {
    const result = await axios({
      url,
      method: "GET",
    });
    if (result.status !== 200) {
      return Promise.reject(result);
    }
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/v1/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
