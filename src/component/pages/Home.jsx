import Azienda from "../organisms/Azienda";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-start">
      <div className="bg-section-light col-span-2  p-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <h1 className="font-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
          molestias consectetur voluptate harum architecto dolor ipsa officia
          eaque quisquam! Provident doloribus obcaecati consequatur excepturi
          veniam, harum quia recusandae minima!S
        </h1>
      </div>
      <div className="bg-section-light p-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <Azienda />
      </div>
    </div>
  );
};
export default Home;
