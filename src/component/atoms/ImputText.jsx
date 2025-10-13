const ImputText =({id,value,onChange})=>{
    return (
         <input type="text"
               id={id}
               className="bg-btn-light font-p dark:text-text-secondary-dark text-text-secondary-light dark:bg-btn-dark md:w-lg w-3xs py-1 px-3 rounded-4xl shadow-md focus:outline-2  focus:outline-btn-light dark:focus:outline-btn-dark "
               value={value}
               onChange={onChange}
               

               />
    )
}
export default ImputText