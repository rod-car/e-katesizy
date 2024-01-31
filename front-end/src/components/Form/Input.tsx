import { HTMLInputTypeAttribute, useId } from "react"

type InputProps = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    name?: string,
    label: string
}

export function Input ({ type = 'text', ...props }: InputProps) {
    const id = useId()
    return <div className="form-group">
        <label className="form-label" htmlFor={id}>{props.label}</label>
        <input name={props.name} type={type} id={id} className="form-control" placeholder={props.placeholder} />
    </div>
}