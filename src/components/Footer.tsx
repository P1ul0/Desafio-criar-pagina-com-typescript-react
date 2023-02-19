import {
  Box,
  Center,
  Text,
} from "@chakra-ui/react";

export const Footer = () => {
  return( 
    <>

        <Box  minHeight="5vh" backgroundColor="#9413dc" padding="25px">
            <Box backgroundColor="#ffffff" borderRadius="25px" padding="15px">  
                <Center>
                    <Text marginLeft='15px' marginTop='20px'> Muito obrigado por visita meu projeto react</Text>
                </Center>
                
            </Box>
        </Box>
        
    </>
  );
};
