import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dropLocalStorage, getAllLocalStorage } from "../services/storage";

//criando um estado global/ context API
interface IAppContext {

  isLooggedIn: boolean
  setIsLooggedIn: (isLooggedIn: boolean) =>void
}
//criando um contexto global
export const AppContext = createContext({} as IAppContext);

//criando provider/componente para destribuir o componente para os "filhos" do provider
export const AppContextProvider = ({ children }: any) => {

  const [ isLooggedIn, setIsLooggedIn ] = useState<boolean>(false)
  const navigate = useNavigate()

  const storage = getAllLocalStorage()

  //utilizar o useEffect para ajudar na re-renderização das paginas
  useEffect(() => {
    if(storage){
      // A função parse  converte uma string para json
     const { login } = JSON.parse(storage)
     setIsLooggedIn(login)
     if(login === false){
      dropLocalStorage()
      navigate('/')
     }

     navigate('/infoConta')


    }
  },[])

  


  return <AppContext.Provider value={{  isLooggedIn, setIsLooggedIn }}>
    {children}
    </AppContext.Provider>;
};
