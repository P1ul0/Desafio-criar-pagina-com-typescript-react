import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./login";

/*mocando o react para realizar os teste
const mockSetIsLooggedIn = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLooggedIn: mockSetIsLooggedIn,
  }),
}));

/*mocando o react-router-dom
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom") as any,
  useNavigate:() => mockNavigate
}));*/

describe("login", () => {
  /*mocando a função alert, pois é uma função nativa do react, so queremos testar as função que criadas pelo desenvolvedor
  const mockAlert = jest.fn();
  window.alert = mockAlert;*/
  const mockEmail = "Paulo.dio.bank";
  const mockPassword = "123456";

  it("deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
    /*para testar o parametro passado para aquela função
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
    expect(mockNavigate).toHaveBeenCalledWith("/1");*/
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email@inválido.com", "123456");
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso a senha esteja inválida", async () => {
    const response = await login("Paulo.dio.bank", "13456");
    expect(response).toBeFalsy();
  });
});
