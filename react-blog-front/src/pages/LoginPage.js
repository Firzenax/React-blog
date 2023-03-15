import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Grid templateColumns="repeat(2,1fr)" gap={4}>
      <GridItem colSpan={2}>
        <Center>
          <h1>Log In</h1>
        </Center>
      </GridItem>
      <GridItem>
        <Center>{error && <p className="error">{error}</p>}</Center>
      </GridItem>
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
      <GridItem colSpan={2}>
        <Center>
          <Link href="/signup">
            <Text>Don't have an account? Create one here</Text>
          </Link>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default LoginPage;
