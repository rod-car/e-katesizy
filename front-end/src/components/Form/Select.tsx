import { useId } from "react"

type SelectProps = {
    placeholder?: string,
    name?: string,
    label: string,
    data: any[]
}

export function Select (props: SelectProps) {
    const id = useId()
    return <div className="form-group">
        <label className="form-label" htmlFor={id}>{props.label}</label>
        <select name={props.name} id={id} className="form-control">
            <option value={undefined}>Selectionner un option</option>
            {props.data.map(data => <option value={data.id}>{data.label}</option>)}
        </select>
    </div>
}