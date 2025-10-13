

const VARIANTS ={
    primary:" dark:text-text-secondary-dark  text-text-secondary-light",
    secondary:" dark:text-accent-red  text-accent-red",
    accent:"dark:text-accent-blue-dark text-accent-blue-medium"

}

const Button =({text,variant = "primary", onClick})=>{
    const variantClasses = VARIANTS[variant] || VARIANTS.primary
    return(
        <button
        onClick={onClick}
        className={ `${variantClasses} hover:bg-btn-light bg-bg-list-light font-h font-medium dark:bg-btn-dark  py-1 px-3 rounded-4xl  cursor-pointer  dark:hover:bg-icon-gray-dark dark:shadow-xs shadow-xl`}
        >{text}</button>
    )

}

export default Button