const SearchBar =({value,onChange,placeholder})=>{
    return(
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-section-light font-p text-black dark:text-white dark:bg-section-dark md:w-xl w-2xs py-2 px-3 rounded-4xl shadow-md focus:outline-2  focus:outline-btn-light dark:focus:outline-btn-dark "
        />
    )

}
export default SearchBar