import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { PageTitle } from "../../components/PageTitle"
import { NavLink } from "react-router-dom"

type Group = {
    id: number,
    label: string,
    notation: string
}

export function ListGroup () {
    const { data: groups, error, loading, get } = useFetch<Group[]>("/groups")
    
    useEffect(() => {
        get({ page: 1 })
    }, [])

    return (
        <>
            <PageTitle title="Lisitra groupe">
                <NavLink to="/group/new" className="btn btn-primary"><i className="fa fa-plus mr-2"></i>Vaovao</NavLink>
            </PageTitle>

            <table className="table table-striped w-100 mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Label</th>
                        <th>Notation</th>
                    </tr>
                </thead>
                <tbody>
                    { loading && <tr>
                        <td colSpan={3} className="text-center">Chargement</td>
                    </tr> }
                    { error && <tr>
                        <td colSpan={3} className="text-center">Impossible de charger les données: {error}</td>
                    </tr> }
                    {groups && groups.map(group => {
                        return <tr key={group.id}>
                            <td>{ group.id }</td>
                            <td>{ group.label }</td>
                            <td>{ group.notation }</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}