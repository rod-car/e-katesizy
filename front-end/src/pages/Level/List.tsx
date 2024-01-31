import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

type Level = {
    id: number,
    label: string,
    notation: string
}

export function List () {
    const { data: levels, error, loading, get } = useFetch<Level[]>("/levels")
    
    useEffect(() => {
        get({ page: 1 })
    }, [])

    return (
        <>
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
                    {levels && levels.map(level => {
                        return <tr key={level.id}>
                            <td>{ level.id }</td>
                            <td>{ level.label }</td>
                            <td>{ level.notation }</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}