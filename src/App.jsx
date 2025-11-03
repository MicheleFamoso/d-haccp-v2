import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sandbox from "./component/templates/DashboardLayout";
import LoginPage from "./component/pages/LoginPage";
import RegistrationForm from "./component/organisms/RegistrationForm";
import DashboardLayout from "./component/templates/DashboardLayout";
import Home from "./component/pages/Home";
import Temperatura from "./component/pages/Temperatura";
import Pulizia from "./component/pages/Pulizia";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
