import { Link } from "react-router-dom";
import {
  Heading,
  LinkBox,
  Grid,
  Text,
  GridItem,
  Center,
  Box,
  Spinner,
} from "@chakra-ui/react";
import useArticles from "../../hooks/useArticles";

const ArticlesList = () => {
  const { status, data, error } = useArticles();

  if (status === "loading")
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (error) return <p>An error occured ${error.message}</p>;

  return (
    <Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
                  {article.articleName}
                </Heading>
                <Text>{article.articleDetails.articleHeader}</Text>
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
