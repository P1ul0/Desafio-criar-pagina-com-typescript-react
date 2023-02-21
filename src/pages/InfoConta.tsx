import { Box, Button, Center, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { AppContext } from "../components/AppContext";
import { CardInfo } from "../components/CardInfo";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const InfoConta = () => {
  const { isLooggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const storage = localStorage.getItem("User");
  let nameUser = "";
  let emailUser = "";
  if (storage) {
    const { name, email } = JSON.parse(storage);

    nameUser += name;
    emailUser += email;
  }
  !isLooggedIn && navigate("/");

  return (
    <Box minHeight="66vh">
      <Center marginTop="30px">
        <CardInfo mainContent="Nome do usuário" content={nameUser}></CardInfo>;
        <CardInfo
          mainContent="Informações Pessoais"
          content={emailUser}
        ></CardInfo>
        <Link href="/Conta/1">
          <Button> Detalhe da Conta</Button>
        </Link>
      </Center>
    </Box>
  );
};
