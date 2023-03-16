import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Center, Container, GridItem } from "@chakra-ui/layout";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    await signInWithEmailAndPassword(getAuth(), email, password);
    navigate("/");
  };

  return (
    <GridItem colSpan={2}>
      <Center>
        <Container>
          {" "}
          <Input
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin={4}
          />
          <Input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin={4}
          />
          <Center>
            <Button colorScheme="teal" onClick={logIn} margin={4} w="80%">
              Log In
            </Button>
          </Center>
        </Container>
      </Center>
    </GridItem>
  );
};

export default LoginForm;
