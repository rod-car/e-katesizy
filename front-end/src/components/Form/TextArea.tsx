import { useId } from "react"

type TextareaProps = {
    placeholder?: string,
    name?: string,
    label: string
}

export function Textarea (props: TextareaProps) {
    const id = useId()
    return <div className="form-group">
        <label className="form-label" htmlFor={id}>{props.label}</label>
        <textarea rows={5} name={props.name} id={id} className="form-control" placeholder={props.placeholder} />
    </div>
}