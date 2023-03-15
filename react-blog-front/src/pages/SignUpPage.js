import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
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
            <Input
              type="password"
              placeholder="Confirm your password"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              margin={4}
            />
            <Center>
              <Button
                colorScheme="teal"
                onClick={createAccount}
                margin={4}
                w="80%"
              >
                Sign up
              </Button>
            </Center>
          </Container>
        </Center>
      </GridItem>
      <GridItem colSpan={2}>
        <Center>
          <Link href="/login">Already have an account ? Log in here</Link>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default SignUpPage;
