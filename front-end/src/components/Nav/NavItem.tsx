import { ReactNode } from "react"

type NavItemProps = {
    title: string,
    id: string,
    icon: string,
    children: ReactNode
}

export function NavItem ({ title, id, icon, children } : NavItemProps) {
    return <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={`#${id}`}
            aria-expanded="true" aria-controls={id}>
            <i className={`fas fa-fw ${icon}`}></i>
            <span>{title}</span>
        </a>
        <div id={id} className="collapse" aria-labelledby={title} data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                { children }
            </div>
        </div>
    </li>
}