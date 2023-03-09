import { Link } from "react-router-dom";
import axios from "axios";
import {
  Heading,
  LinkBox,
  LinkOverlay,
  Grid,
  Text,
  GridItem,
  Center,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "react-query";

const useArticles = () => {
  return useQuery("articles", async () => {
    const { data } = await axios.get("/api/articles");
    return data;
  });
};

const ArticlesList = () => {
  const { status, data, error } = useArticles();

  if (status === "loading") return <Spinner />;

  if (error) return <p>An error occured ${error.message}</p>;

  return (
    <Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data?.map((article, i) => (
          <Link to={`/${article.articleName}`} key={i}>
            <GridItem>
              <LinkBox
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
              >
                <Heading size="md" my="2">
                  <LinkOverlay>{article.articleName}</LinkOverlay>
                </Heading>
                <Text>
                  Catch up on what’s been cookin’ at Smashing and explore some
                  of the most popular community resources.
                </Text>
                <Box as="a" color="teal.400" href="#" fontWeight="bold">
                  Read this article
                </Box>
              </LinkBox>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Center>
  );
};

export default ArticlesList;
