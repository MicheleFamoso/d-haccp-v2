import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Sandbox from "./component/sandbox";
import LoginPage from "./component/pages/LoginPage";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/sandbox" element={<Sandbox/>}></Route>
    </Routes>
        </BrowserRouter>
   
    
  )
}

export default App
