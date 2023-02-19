import { login } from "./login";

describe("login", () => {

   //mocando a função alert, pois é uma função nativa do react, so queremos testar as função que criadas pelo desenvolvedor
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("deve exibir um alert com boas vindas", () => {
    login();
    expect(mockAlert).toBeCalled();
    //para testar o parametro passado para aquela função
    expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')

  });
});
