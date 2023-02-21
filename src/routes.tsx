import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import { Conta } from "./pages/Conta";
import { InfoConta } from "./pages/InfoConta";
import { Home } from "./pages/Home";

export const MainRoutes = () => {
  const { isLooggedIn } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLooggedIn ? <Conta/> : <Home />}></Route>
      <Route path="/infoConta" element={isLooggedIn ? <InfoConta/> : <Home />}></Route>
    </Routes>
  );
};
