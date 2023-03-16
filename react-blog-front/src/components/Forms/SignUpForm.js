import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Center, Container, GridItem } from "@chakra-ui/layout";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpForm = () => {
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
    <>
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
      <GridItem>
        <Center>{error && <p className="error">{error}</p>}</Center>
      </GridItem>
    </>
  );
};

export default SignUpForm;
