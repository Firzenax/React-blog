import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import axios from "axios";
import { QueryClient, useMutation } from "react-query";

function AddArticleDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const [articleName, setarticleName] = useState("");
  const [articleAuthor, setarticleAuthor] = useState("");
  const [articleContent, setarticleContent] = useState([]);
  const [message, setMessage] = useState("");

  async function createArticle() {
    const response = await axios.post("/api/articles/AddNewArticle", {
      articleName,
      articleAuthor,
      articleContent: [articleContent],
    });
    setMessage(response.data);
  }

  const { mutate } = useMutation({
    mutationFn: createArticle,
    onSuccess: async () => {
      setInterval(await QueryClient.refetchQuery(["articles"]), 1000);
    },
  });

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onOpen}
        float="right"
        marginRight={16}
      >
        Create a new article
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new article
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="articleName">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter article name"
                  value={articleName}
                  onChange={(e) => {
                    setarticleName(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Author</FormLabel>
                <Input
                  ref={firstField}
                  id="author"
                  placeholder="Please enter article Author"
                  value={articleAuthor}
                  onChange={(e) => {
                    setarticleAuthor(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  value={articleContent}
                  onChange={(e) => {
                    setarticleContent(e.target.value);
                  }}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={mutate}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddArticleDrawer;
