import ImputText from "../atoms/ImputText"
import Label from "../atoms/Label"

const FormField = ({id,value,onChange,text})=>{
    return(
        <div className="flex flex-col gap-2">
            <Label
            htmlFor={id}
               text={text} 
            />
            <ImputText
             value={value}
               onChange={onChange}
                 id={id}
            />
        </div>
    )
}

export default FormField 