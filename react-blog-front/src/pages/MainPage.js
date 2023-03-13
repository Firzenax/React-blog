import { Center, Heading } from "@chakra-ui/react";
import AddArticleDrawer from "../components/AddArticleDrawer/AddArticleDrawer";
import ArticlesList from "../components/ArticlesList/ArticlesList";

const MainPage = () => {
  return (
    <>
      <AddArticleDrawer />
      <Center paddingBottom={16}>
        <Heading>See our articles</Heading>
      </Center>
      <ArticlesList />;
    </>
  );
};

export default MainPage;
