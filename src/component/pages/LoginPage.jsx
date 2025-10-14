import HeroSection from "../organisms/HeroSection";
import LoginForm from "../organisms/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex bg-[url(bg.png)]  bg-cover  h-dvh">
      <div className="hidden xl:flex">
        <HeroSection />
      </div>

      <div className="flex">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
