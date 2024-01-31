import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"
import { confirmAlert } from "react-confirm-alert"
import { Select } from "../../components/Form"

type Student = {
    id: number,
    firstname: string,
    lastname: string,
    birth_date: string,
    birth_place: string
}

export function StudentList () {
    const loading = false
    const error = null
    const students:Student[] = [
        {
            id: 1,
            firstname: "RAKOTO",
            lastname: "Beloha",
            birth_date: "22/06/2001",
            birth_place: "Toamasina"
        },
        {
            id: 2,
            firstname: "RAKOTO",
            lastname: "Beloha",
            birth_date: "22/06/2001",
            birth_place: "Toamasina"
        },
        {
            id: 3,
            firstname: "RAKOTO",
            lastname: "Beloha",
            birth_date: "22/06/2001",
            birth_place: "Toamasina"
        },
        {
            id: 4,
            firstname: "RAKOTO",
            lastname: "Beloha",
            birth_date: "22/06/2001",
            birth_place: "Toamasina"
        }
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
            <PageTitle title="Liste des etudiants">
                <NavLink to="/student/inscription" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Inscription</NavLink>
            </PageTitle>

            <div className="mb-3 d-flex justify-content-between">
                <Select label="Annee scolaire" data={[
                    { id: 1, label: '2023-2024' },
                    { id: 2, label: '2022-2023' },
                    { id: 3, label: '2021-2022' },
                ]} />

                <Select label="Classe" data={[
                    { id: 1, label: 'KTA 3 G1' },
                    { id: 2, label: 'KTA 3 G2' },
                    { id: 3, label: 'KTA 3 G3' },
                ]} />

                <Select label="Prticipation" data={[
                    { id: 1, label: 'Paye' },
                    { id: 2, label: 'Non paye' },
                ]} />

                <Select label="Age" data={[
                    { id: 1, label: '06 Ans' },
                    { id: 2, label: '05 Ans' },
                ]} />
            </div>
            
            <table className="table table-striped w-100 mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prenoms</th>
                        <th>Date de naissance</th>
                        <th>Lieu de naissance</th>
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
                    {students && students.map(student => {
                        return <tr key={student.id}>
                            <td>{ student.id }</td>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.birth_date}</td>
                            <td>{student.birth_place}</td>
                            <td className="w-25">
                                <NavLink className='btn btn-info btn-sm mr-2' to={`/student/details/${student.id}`}><i className="fa fa-folder"></i></NavLink>
                                <NavLink className='btn btn-primary btn-sm mr-2' to={`/student/edit/${student.id}`}><i className="fa fa-edit"></i></NavLink>
                                <button onClick={showAlert} className="btn btn-danger btn-sm" type="submit"><i className="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )

}