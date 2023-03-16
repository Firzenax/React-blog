import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const AddArticlePage = () => {
  const [articleName, setarticleName] = useState("");
  const [articleAuthor, setarticleAuthor] = useState("");
  const [articleHeader, setarticleHeader] = useState("");
  const [articleContent, setarticleContent] = useState("");

  let navigate = useNavigate();

  async function createArticle() {
    var splitedArticleContent = articleContent.split(/\r?\n|\r|\n/g);

    await axios.post("/api/articles/AddNewArticle", {
      articleName,
      articleAuthor,
      articleContent: splitedArticleContent,
      articleHeader: articleHeader,
    });
  }
  const { error, isLoading, mutateAsync } = useMutation({
    mutationFn: createArticle,
  });

  const postArticle = async () => {
    if (
      articleName !== "" &&
      articleHeader !== "" &&
      articleAuthor !== "" &&
      articleContent !== ""
    ) {
      await mutateAsync();

      navigate("/");
    }
  };

  if (error) return <p>An error occured :{error.message} </p>;

  return (
    <Center marginTop={8}>
      <Grid templateColumns="repeat(2,1fr)" w="80%" gap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Article name</FormLabel>
            <Input
              placeholder="Article name"
              onChange={(e) => {
                setarticleName(e.target.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Article header</FormLabel>
            <Input
              placeholder="Article header"
              onChange={(e) => {
                setarticleHeader(e.target.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Author name</FormLabel>
            <Input
              placeholder="Author name"
              onChange={(e) => {
                setarticleAuthor(e.target.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Article content</FormLabel>
            <Textarea
              resize="none"
              placeholder="Article content"
              minH="300px"
              onChange={(e) => {
                setarticleContent(e.target.value);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isLoading}
            type="submit"
            w="100%"
            onClick={postArticle}
          >
            Submit
          </Button>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default AddArticlePage;
