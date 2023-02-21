import { Box, Button, Center, SimpleGrid, Spinner } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { CardInfo } from "../components/CardInfo";

interface userData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  //metodo para utilizar função assicroma
  const [userData, setUserData] = useState<null | userData>();

  const { isLooggedIn } = useContext(AppContext);
  //desestruturando a função useparams para receber o id
  const { id } = useParams();
  //função para direcionar o usuário para pagina desejada
  const navigate = useNavigate();

  !isLooggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();

  // validando se o id passado pelo usuário esta correto
  if (userData && userData.id !== id) {
    //caso esteja incorreto sera direcionado para a pagina HOME
    navigate("/");
  }
  return (
    <Center>
      <SimpleGrid column={2} paddingTop={16}>
        <Box minHeight="66vh">
          <Center>
            {/* sempre colocar a ? antes do atributo que deseja acessar, para verificar se o atributo não estão nulo */}
            {userData === undefined || userData === null ? (
              <Center>
                <Spinner size="xl" color="#9413dc" />
              </Center>
            ) : (
              <>
                <CardInfo
                  mainContent={`Bem vindo ${userData?.name}`}
                  content={`${actualData.getDate()} / ${
                    actualData.getMonth() + 1
                  } / ${actualData.getFullYear()} ${actualData.getHours()} : ${actualData.getMinutes()}`}
                />
                <CardInfo
                  mainContent="Saldo"
                  content={`R$ ${userData?.balance}`}
                ></CardInfo>
                <Link to="/infoConta">
                  <Button> Informações Pessoais</Button>
                </Link>
              </>
            )}
          </Center>
        </Box>
      </SimpleGrid>
    </Center>
  );
};
