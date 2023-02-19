import { Box, Img, Flex ,Text, Square } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <>
        <Box  minHeight="10vh" backgroundColor="#9413dc" padding="25px">
            <Box backgroundColor="#ffffff" borderRadius="25px" padding="15px"> 
                <Flex>
                    <Img boxSize="50px" marginLeft='15px' src={logo} alt="logo Dio Bank"></Img>
                    <Square>
                        <Text marginLeft='15px'>Dio Bank</Text>
                    </Square>
                </Flex>
            </Box>
        </Box>
    </>
  );
};
