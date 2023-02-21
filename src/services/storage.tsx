interface IDioBank{
    login: boolean
}

const dioBank = {
  login: false,
};

export const getAllLocalStorage = (): string |null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  //A função stringify converte um objeto para string
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDioBank) => {
    localStorage.setItem('diobank',JSON.stringify(dioBank))
}

export const addUserLocalStorage = (type:string, object:object) => {
    localStorage.setItem(`${type}`, JSON.stringify(object))
}

export const dropLocalStorage = () =>{
  localStorage.clear()
}