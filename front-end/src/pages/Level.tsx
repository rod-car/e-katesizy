import { NavLink } from "react-router-dom"
import { List } from "./Level/List"
import { PageTitle } from "../components/PageTitle"

type Level = {
    id: number,
    label: string,
    notation: string
}

export function Level () {
    return (
        <>
            <PageTitle title="Lisitra sokajy">
                <NavLink to="/level/new" className="btn btn-primary"><i className="fa fa-plus mr-2"></i>Vaovao</NavLink>
            </PageTitle>

            <List />
        </>
    )
}