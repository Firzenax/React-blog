import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { GridItem } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const ButtonWhenNoUser = () => {
  return (
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
  );
};

export default ButtonWhenNoUser;
