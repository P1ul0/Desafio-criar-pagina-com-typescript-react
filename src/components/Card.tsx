import { Box,ChakraProvider } from "@chakra-ui/react";


export const Card = ({ children}: any) => {


  return (
    // o operador <> serve para agrupar elementos e melhor do q usar uma div por causa do desempenho
    <>
      <ChakraProvider>
        <Box minHeight="70vh" backgroundColor="#9413dc" padding="25px">
          {children}

        </Box>
      </ChakraProvider>
    </>
  );
};
