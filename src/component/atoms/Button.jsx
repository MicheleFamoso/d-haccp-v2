

const VARIANTS ={
    primary:" dark:text-text-secondary-dark  text-text-secondary-light",
    secondary:" dark:text-accent-red  text-accent-red",
}

const Button =({text,variant = "primary", onClick})=>{
    const variantClasses = VARIANTS[variant] || VARIANTS.primary
    return(
        <button
        onClick={onClick}
        className={ `${variantClasses} bg-btn-light font-p dark:bg-btn-dark  py-1 px-3 rounded-4xl  cursor-pointer hover:bg-bg-list-light dark:hover:bg-bg-list-dark shadow-xl`}
        >{text}</button>
    )

}

export default Button