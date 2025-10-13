const Label=({htmlFor,text})=>{
return (

     <label htmlFor={htmlFor}
            className="dark:text-white text-black font-h text-xl font-bold ml-4"
            >
                {text}
            </label>

             
)
}
export default Label