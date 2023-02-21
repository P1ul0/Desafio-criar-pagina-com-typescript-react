import { Box, Text } from "@chakra-ui/react";

export interface ICardInfo{
    mainContent: string
    content: string
}

export const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box
      minHeight="120px"
      minWidth="320px"
      marginRight="30px"
      backgroundColor="#9413dc"
      padding={8}
      borderRadius='25px'
    >

      <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
      <Text fontSize='xl'>{content}</Text>
    </Box>
  );
};
