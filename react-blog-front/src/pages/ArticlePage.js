import {
  Center,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";

const ArticlePage = () => {
  const { articleName } = useParams();
  const { status, data, error } = useArticle(articleName);

  if (status === "loading")
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (error) return <p>An error occured ${error.message}</p>;

  return (
    <Grid templateColumns="repeat(1,1fr)" gap={6}>
      <GridItem>
        <Center>
          <Heading>{data.articleName}</Heading>
        </Center>
      </GridItem>
      <GridItem>
        <Center>
          <Text fontSize={20}>{data.articleDetails.articleHeader}</Text>
        </Center>
      </GridItem>
      {data.articleDetails.articleContent.map((content, i) => (
        <GridItem key={i}>
          <Center>
            <Text>{content}</Text>
          </Center>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ArticlePage;
