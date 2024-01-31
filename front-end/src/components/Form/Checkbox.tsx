import { useId } from "react"

type CheckboxProps = {
    label: string,
    name?: string
}

export function Checkbox (props: CheckboxProps) {
    const id = useId()
    return <div className="form-group">
        <label className="form-check-label me-2" htmlFor={id}>{props.label}</label>
        <input name={props.name} type='checkbox' id={id} className="form-check-input" />
    </div>
}