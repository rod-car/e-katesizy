import { ReactNode } from "react"

type ButtonProps = {
    type?: 'submit' | 'reset' | 'button',
    onClick?: () => {},
    icon?: string,
    children: ReactNode,
    disabled?: boolean,
    color: string
}

export function Button ({ type = 'submit', ...props }: ButtonProps) {
    return <button disabled={props.disabled} onClick={props.onClick} type={type} className={`btn btn-${props.color}`}>
        {props.icon && <i className={`fa ${props.icon} mr-2`}></i>}
        {props.children}
    </button>
}