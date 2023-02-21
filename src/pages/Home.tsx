import { Box, Center, Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { DButton } from "../components/DButton";
import { login } from "../services/login";
import { addUserLocalStorage, changeLocalStorage } from "../services/storage";




export const Home = () => {
  //definido os states
  const [userData, setUserData] = useState<null | userData>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[name, setName] = useState<string>('')
  const { setIsLooggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string, name: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert(`Campo inválido`);
    }

    //setando o valor true para permitir o usuário acessar a pagina conta
    setIsLooggedIn(true);
    //alterando o valor do localStorage
    changeLocalStorage({ login: true });
    //direcionando o usuário para pagina Conta
    navigate("/conta/1");
    const user = {
      name,
      email,
      password,
    };

    addUserLocalStorage("User", user);
  };
  interface userData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
  }

  useEffect(() => {
    const getData = async () => {
      const data: any | userData = await api;
      setUserData(data);
    };
  
    getData();
  }, []);

  return (
    <Card>
      <Box
        minHeight="300px"
        minWidth="300px"
        backgroundColor="#ffffff"
        borderRadius="25px"
        padding="15px"
      >
        {/* {
            /*renderização condicional utlizando o if ternario 
            userData === null || userData === undefined ?
            <h1>Loading...</h1> :
            <h1>Informações carregadas</h1>
          }**/}
        <Center>
          <Text fontSize="40px" fontWeight="bold">
            Faça o Login
          </Text>
        </Center>
        <Center marginTop="40px">
        <Input
            placeholder="Name"
            width="300px"
            marginRight="30px"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="E-mail"
            width="300px"
            marginRight="30px"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Password"
            width="300px"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Center>
        <Center>
          <DButton onClick={() => validateUser(email, password, name)} />
        </Center>
      </Box>
    </Card>
  );
};

