import { Center, Grid, GridItem, Link } from "@chakra-ui/react";
import SignUpForm from "../components/Forms/SignUpForm";

const SignUpPage = () => {
  return (
    <Grid templateColumns="repeat(2,1fr)" gap={4}>
      <GridItem colSpan={2}>
        <Center>
          <h1>Log In</h1>
        </Center>
      </GridItem>
      <SignUpForm />
      <GridItem colSpan={2}>
        <Center>
          <Link href="/login">Already have an account ? Log in here</Link>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default SignUpPage;
