import LoginForm from "../organisms/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex bg-section-light dark:bg-section-dark h-dvh">
 
  <div className="hidden xl:flex  justify-center items-center mx-4">
    <img
      src="/Blue and Purple Gradient Pitch Deck Presentation.zip - 1.jpeg"
      alt="presentation"
      className=" md:w-4xl 3xl:w-6xl rounded-3xl"
    />
  </div>

  <div className="flex">
    <LoginForm />
  </div>
</div>

  );
};

export default LoginPage;
