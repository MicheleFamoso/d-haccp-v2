import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sandbox from "./component/sandbox";
import LoginPage from "./component/pages/LoginPage";
import RegistrationForm from "./component/organisms/RegistrationForm";
import DashboardLayout from "./component/templates/DashboardLayout";
import Home from "./component/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sandbox" element={<Sandbox />}></Route>
        <Route path="/registration" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
