import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Spinner,
} from "@chakra-ui/react";

import ArticlesList from "../components/ArticlesList/ArticlesList";
import ButtonsWhenUser from "../components/ButtonsWhenUser/ButtonsWhenUser";
import ButtonWhenNoUser from "../components/ButtonsWhenUser/ButtonWhenNoUser";
import useUser from "../hooks/useUser";

const MainPage = () => {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  return (
    <Grid gridColumn="repeat(1,1fr)" gap={4} marginBottom={4}>
      {user ? <ButtonsWhenUser /> : <ButtonWhenNoUser />}

      <GridItem colSpan={1}>
        <Center>
          <Box w="800px">
            <Center>
              <Heading margin={8}>See our articles</Heading>
            </Center>
            <ArticlesList />
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default MainPage;
