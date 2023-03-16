import { Center, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import LoginForm from "../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)" gap={4}>
      <GridItem colSpan={2}>
        <Center>
          <h1>Log In</h1>
        </Center>
      </GridItem>

      <LoginForm />
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
