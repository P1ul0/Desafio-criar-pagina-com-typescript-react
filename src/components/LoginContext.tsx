import { createContext, useState } from "react"
import { addUserLocalStorage, changeLocalStorage } from "../services/storage"

interface ILoginContext{
    email: string
    setEmail?: (email: string) => void
    password?: string
    setPassword?: (password: string ) => void
}


export const LoginContext = createContext({} as ILoginContext)


export const LoginContextProvider = ({children}: any) =>{

    const [email,setEmail] = useState<string>('')
    const[password,setPassword]= useState<string>('')
    

    
    return(
        <LoginContext.Provider value= {{email ,setEmail,password,setPassword}} >
            {children}
        </LoginContext.Provider>
    )

}