import {
  addUserLocalStorage,
  changeLocalStorage,
  createLocalStorage,
  dropLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

const User = {
  email: "PAulo",
  password: "123465",
};
describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  //verificando se o prototype do Storage foi chamado
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");

  const mockDropLocal = jest.spyOn(Storage.prototype, "clear");

  const dioBank = {
    login: false,
  };
  it("Deve retornar o objeto no localStorage com a chave diobank", () => {
    //após a verificação de cima , agora irá verificar se a função abaixo foi chamada
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto no localStorage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
  it("Deve alterar o avlor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("deve adicionar uma objeto no localStorage", () => {
    addUserLocalStorage("User", User);
    expect(mockSetItem).toHaveBeenCalled();
  });
  it("deve dropar o localStorage", () => {
    dropLocalStorage();
    expect(mockDropLocal).toHaveBeenCalled();
  });
});
