import { Center, Heading } from "@chakra-ui/react";
import ArticlesList from "../components/ArticlesList/ArticlesList";

const MainPage = () => {
  return (
    <>
      <Center paddingBottom={16}>
        <Heading>See our articles</Heading>
      </Center>
      <ArticlesList />;
    </>
  );
};

export default MainPage;
