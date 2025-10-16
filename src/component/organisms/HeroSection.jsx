const HeroSection = () => {
  return (
    <div className="py-20 3xl:py-30 ml-20 flex flex-col justify-between">
      <div>
        <h1 className="font-h text-8xl 3xl:text-9xl  dark:text-btn-dark/90 text-btn-light/80  text-shadow-lg font-black">
          d/haccp
        </h1>

        <p className="font-p ml-3 3xl:text-3xl text-xl font-medium dark:text-btn-dark/90 text-btn-light/80 text-shadow-lg">
          digital haccp managament
        </p>
      </div>

      <div className="mb-10 3xl:mb-15">
        <p className="font-h text-6xl 3xl:text-7xl font-medium dark:text-btn-dark/90 text-btn-light/80 text-shadow-lg">
          Gestisci la sicurezza alimentare con un{" "}
          <span className="font-bold">click.</span>
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
