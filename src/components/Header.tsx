import { Box, Img, Flex, Text, Square, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  //utilizando o estado global criado em app.tsx
  const { isLooggedIn, setIsLooggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    //alterando o valor do localStorage para o usuario não conseguir acessar a rota sem login
    changeLocalStorage({ login: false });
    //alterando o valor da context api para o usuário não acessar a rota /Conta sem a permissão no valor "true"
    setIsLooggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Box minHeight="10vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#ffffff" borderRadius="25px" padding="15px">
          <Flex>
            <Img
              boxSize="50px"
              marginLeft="15px"
              src={logo}
              alt="logo Dio Bank"
            ></Img>
            <Square>
              <Text marginLeft="15px">Dio Bank</Text>
            </Square>
          </Flex>
          <Spacer />
          {isLooggedIn && <Button onClick={() => logout()}>Sair</Button>}
        </Box>
      </Box>
    </>
  );
};
