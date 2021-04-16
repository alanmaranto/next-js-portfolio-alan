import axios from "axios";

export default async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (error) {
    res.status(error.status || 400).json({ message: "Api error" });
  }
};
