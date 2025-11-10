import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sandbox from "./component/templates/DashboardLayout";
import LoginPage from "./component/pages/LoginPage";
import RegistrationForm from "./component/organisms/RegistrationForm";
import DashboardLayout from "./component/templates/DashboardLayout";
import Home from "./component/pages/Home";
import Temperatura from "./component/pages/Temperatura";
import Pulizia from "./component/pages/Pulizia";
import Infestanti from "./component/pages/Infestanti";
import Fornitori from "./component/pages/Fornitori";
import Forniture from "./component/pages/Forniture";
import Dipendenti from "./component/pages/Dipendenti";
import AziendaMobile from "./component/pages/AziendaMobile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sandbox" element={<Sandbox />}></Route>
        <Route path="/registration" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="temperatura" element={<Temperatura />}></Route>
          <Route path="pulizie" element={<Pulizia />}></Route>
          <Route path="infestanti" element={<Infestanti />}></Route>
          <Route path="fornitori" element={<Fornitori />}></Route>
          <Route path="forniture" element={<Forniture />}></Route>
          <Route path="dipendenti" element={<Dipendenti />}></Route>
          <Route path="azienda" element={<AziendaMobile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
