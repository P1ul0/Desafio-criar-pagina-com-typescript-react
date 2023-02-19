import { Footer } from "./Footer";
import { Header } from "./Header";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input,
  Text,
} from "@chakra-ui/react";
import { login } from "../services/login";

export const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box minHeight="70vh" backgroundColor="#9413dc" padding="25px">
          <Box
            minHeight="300px"
            minWidth="300px"
            backgroundColor="#ffffff"
            borderRadius="25px"
            padding="15px"
          >
            <Center>
              <Text fontSize="40px" fontWeight="bold">
                Faça o Login
              </Text>
            </Center>
            <Center marginTop="40px">
              <Input placeholder="E-mail" width="300px" marginRight="30px" />
              <Input placeholder="Password" width="300px" />
            </Center>
            <Center>
              <Button
                onClick={login}
                colorScheme="teal"
                size="sm"
                width="300px"
                height="50px"
                marginTop="30px"
                fontSize="30px"
                fontWeight="bold"
              >
                Entrar
              </Button>
            </Center>
          </Box>
        </Box>
        <Footer />
      </ChakraProvider>
      
    </>
  );
};
