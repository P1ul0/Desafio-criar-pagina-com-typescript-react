import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layoult";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";
import { MainRoutes } from "./routes";
import {createLocalStorage, getAllLocalStorage} from "./services/storage";
import { LoginContextProvider } from "./components/LoginContext";

function App() {

  //validação para não sobreescrever o localstorage ja criado
  !getAllLocalStorage() && createLocalStorage()
      
  /*chamando a função criada em services/storage
  manipulando os valores do localStorage
  changeLocalStorage({
    login: true
  })*/
  
  

  return (
    //criando novas rotas
    <BrowserRouter>
      {/* utilizando o chakra ui em todas as rotas de uma vez */}
      {/* o provider tem que ser adicionado acima de todos os componente que ele irá destribuir o componente que ele irá criar */}
      <LoginContextProvider>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
      </LoginContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
