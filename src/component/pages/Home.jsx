import Azienda from "../organisms/getComponent/Azienda";

const Home = () => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
      <div className="bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <h1 className="font-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
          molestias consectetur voluptate harum architecto dolor ipsa officia
          eaque quisquam! Provident doloribus obcaecati consequatur excepturi
          veniam, harum quia recusandae minima!S
        </h1>
      </div>
      <div className="bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <Azienda />
      </div>
    </div>
  );
};
export default Home;
