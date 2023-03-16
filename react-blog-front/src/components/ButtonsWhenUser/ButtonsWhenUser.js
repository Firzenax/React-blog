import { Button } from "@chakra-ui/button";
import { AddIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { GridItem } from "@chakra-ui/layout";
import { getAuth, signOut } from "@firebase/auth";
import { Link } from "react-router-dom";

const ButtonsWhenUser = () => {
  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <GridItem colSpan={1}>
      <Button
        leftIcon={<ArrowLeftIcon />}
        colorScheme="red"
        marginLeft={16}
        float="left"
        onClick={logOut}
      >
        Log out
      </Button>
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
  );
};

export default ButtonsWhenUser;
