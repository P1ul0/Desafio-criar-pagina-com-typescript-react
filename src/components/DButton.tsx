
import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";


interface IDButton {
    onClick: MouseEventHandler

}

export const DButton = ({onClick}: IDButton) => {
    return (
        <Button
        onClick={onClick}
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
    )
}