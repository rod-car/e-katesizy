import { PageTitle } from "../../components/PageTitle"
import { NavLink } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

type Class = {
    id: number,
    level: string,
    group: number
}

export function ListClass () {
    const loading = false
    const error = null
    const classes: Class[] = [
        {
            id: 1,
            level: 'KTA 3',
            group: 3
        },
        {
            id: 2,
            level: 'KTA 2',
            group: 3
        },
        {
            id: 3,
            level: 'KTA 1',
            group: 3
        },
        {
            id: 4,
            level: 'KTA 0',
            group: 3
        },
        {
            id: 5,
            level: 'KS 1',
            group: 3
        },
    ]

    const showAlert = () => {
        confirmAlert({
            title: 'Suppression',
            message: 'Supprimer cet enregistrement.',
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'Non',
                    onClick: () => alert('Click No')
                }
            ]
        });
    }

    return (
        <>
            <PageTitle title="Lisitra kilasy">
                <NavLink to="/class/new" className="btn btn-primary"><i className="fa fa-plus mr-2"></i>Vaovao</NavLink>
            </PageTitle>

            <table className="table table-striped w-100 mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Label</th>
                        <th>Nombre etudiant</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { loading && <tr>
                        <td colSpan={3} className="text-center">Chargement</td>
                    </tr> }
                    { error && <tr>
                        <td colSpan={3} className="text-center">Impossible de charger les données: {error}</td>
                    </tr> }
                    {classes && classes.map(c => {
                        return <tr key={c.id}>
                            <td>{ c.id }</td>
                            <td>{c.level} Groupe { c.group }</td>
                            <td>10</td>
                            <td className="w-25">
                                <NavLink className='btn btn-info btn-sm mr-2' to={`/class/details/${c.id}`}><i className="fa fa-folder"></i></NavLink>
                                <NavLink className='btn btn-primary btn-sm mr-2' to={`/class/edit/${c.id}`}><i className="fa fa-edit"></i></NavLink>
                                <button onClick={showAlert} className="btn btn-danger btn-sm" type="submit"><i className="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}