const RangeFrigo = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="frigo"
        className="dark:text-text-secondary-dark text-text-secondary-light font-h text-md  ml-4 "
      >
        Temperatura
      </label>
      <div className="flex mt-2 items-center gap-8 bg-btn-light/60  dark:bg-btn-dark/80 w-full backdrop-blur-xs py-1 px-3 rounded-4xl shadow-md">
        <input
          id="frigo"
          type="range"
          min="-30"
          max="20"
          step="1"
          value={value}
          onChange={onChange}
          className="
            accent-accent-blue-light
            hover:bg-accent-blue-dark
            appearance-none
            h-2
            bg-gradient-to-r from-blue-300 via-blue-400 to-red-300
            dark:from-blue-950 dark:via-violet-900 dark:to-red-950
            rounded-full
            ml-2 
            w-full
            cursor-pointer
            "
        />
        <input
          className="w-2/5 font-p dark:text-text-secondary-dark text-text-secondary-light focus:outline-0"
          type="number"
          id="frigo"
          value={value}
          onChange={onChange}
          min="-30"
          max="25"
          step="1"
        />
      </div>
    </div>
  );
};
export default RangeFrigo;
