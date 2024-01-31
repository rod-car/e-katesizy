import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type NavItemLinkProps = {
    link: string,
    children: ReactNode
}

export function NavItemLink ({ link, children } : NavItemLinkProps) {
    return <NavLink className="collapse-item" to={link}>
        {children}
    </NavLink>
}