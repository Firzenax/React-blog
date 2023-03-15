import {
  Heading,
  LinkBox,
  Grid,
  Text,
  GridItem,
  Center,
  Box,
  Spinner,
  LinkOverlay,
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
          <GridItem key={i}>
            <LinkBox
              h={200}
              as="article"
              w={500}
              p="5"
              borderWidth="1px"
              rounded="md"
            >
              <Heading>
                <LinkOverlay href={`/${article.articleName}`} size="md" my="2">
                  {article.articleName}
                </LinkOverlay>
              </Heading>

              <Text>{article.articleDetails.articleHeader}</Text>
              <Box
                as="a"
                color="teal.400"
                href={`/${article.articleName}`}
                fontWeight="bold"
              >
                Read this article
              </Box>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default ArticlesList;
