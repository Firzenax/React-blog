import axios from "axios";
import { useQuery } from "react-query";

const useArticles = () => {
  return useQuery("articles", async () => {
    const { data } = await axios.get("/api/articles");
    return data;
  });
};

export default useArticles;
