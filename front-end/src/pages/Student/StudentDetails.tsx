import { NavLink, useParams } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"
import { confirmAlert } from "react-confirm-alert"

type Student = {
    id: number,
    firstname: string,
    lastname: string,
    birth_date: string,
    birth_place: string
}

export function StudentDetails () {
    const student: Student = {
        id: 1,
        firstname: "RAKOTO",
        lastname: "Beloha",
        birth_date: "22/06/2001",
        birth_place: "Toamasina"
    }

    const { studentId } = useParams()

    return (
        <>
            <PageTitle title={`Fiche de l'etudiant numero ${studentId}`}>
                <NavLink to={`/student/edit/${studentId}`} className="btn btn-primary"><i className="fa fa-pen mr-2"></i>Editer</NavLink>
            </PageTitle>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Information</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{student.id}</td>
                    </tr>
                    <tr>
                        <td>Nom</td>
                        <td>{student.firstname}</td>
                    </tr>
                    <tr>
                        <td>Prenoms</td>
                        <td>{student.lastname}</td>
                    </tr>
                    <tr>
                        <td>Date de naissance</td>
                        <td>{student.birth_date}</td>
                    </tr>
                    <tr>
                        <td>Lieu de naissance</td>
                        <td>{student.birth_place}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}