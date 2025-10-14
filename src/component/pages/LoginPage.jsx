import HeroSection from "../organisms/HeroSection";
import LoginForm from "../organisms/LoginForm";
import { useLocation } from "react-router-dom";
import RegistrationForm from "../organisms/RegistrationForm";

const LoginPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/";

  return (
    <div className="flex bg-[url(bg.png)]  bg-cover  h-dvh">
      <div className="hidden xl:flex">
        <HeroSection />
      </div>

      <div className="flex">
        {isLogin ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default LoginPage;
