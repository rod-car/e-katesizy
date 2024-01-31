import { ReactNode } from "react"

type NavItemProps = {
    children: ReactNode
}

export function NavItemHeader ({ children } : NavItemProps) {
    return <div className="sidebar-heading">
        {children}
    </div>
}