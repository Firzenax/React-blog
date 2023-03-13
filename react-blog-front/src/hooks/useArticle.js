import axios from "axios";
import { useQuery } from "react-query";

const useArticle = (articleName) => {
  return useQuery("article", async () => {
    const { data } = await axios.get(`/api/articles/${articleName}`);
    return data;
  });
};

export default useArticle;
