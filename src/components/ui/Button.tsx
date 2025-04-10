import { ReactElement } from "react"

type Variants = "primary" | "secondary"
interface ButtonProps {
    variant: Variants,
    size?: "lg"| "md" | "sm",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement 
}

const defaultStyles = "flex rounded-md p-4";
const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"

}

export const Button = (props: ButtonProps) => {
    
    return<button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles}`}>{props.startIcon ? <div className="pr-2.5">{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}

<Button variant = "primary" size="md" onClick={()=>{}} text={"fgf"}></Button>