import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import useUser from "../hooks/useUser";

const MainPage = () => {
  const { user } = useUser();

  return (
    <Grid gridColumn="repeat(1,1fr)" gap={4}>
      {user ? (
        <GridItem colSpan={1}>
          <Link to={"/addArticle"}>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="teal"
              marginRight={16}
              float="right"
            >
              Create a new article
            </Button>
          </Link>
        </GridItem>
      ) : (
        <GridItem colSpan={1}>
          <Link to={"/login"}>
            <Button
              leftIcon={<AddIcon />}
              colorScheme="teal"
              marginRight={16}
              float="right"
            >
              Connect to create an article
            </Button>
          </Link>
        </GridItem>
      )}

      <GridItem colSpan={1}>
        <Center>
          <Box w="800px">
            <Center>
              <Heading margin={8}>See our articles</Heading>
            </Center>
            <ArticlesList />;
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default MainPage;
