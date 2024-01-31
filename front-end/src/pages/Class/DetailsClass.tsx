import { NavLink, useParams } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"

type Class = {
    id: number,
    label: string,
    notation: string
}

export function DetailsClass () {
    const { classId } = useParams()

    return (
        <>
            <PageTitle title={`Details de la classe ${classId}`}>
                <NavLink to="/class/list" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Lisitra</NavLink>
            </PageTitle>
            
            <div className="d-flex justify-content-between mb-4">
                <h2 className="h4 mb-0 text-gray-800 w-50">Liste des etudiants - 50 etudiants</h2>
                <select name="" id="" className="form-control w-25">
                    <option value="2024">2024</option>
                    <option value="2024">2023</option>
                    <option value="2024">2022</option>
                    <option value="2024">2021</option>
                </select>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prenoms</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>RAKOTO</td>
                        <td>Beloha</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>RAKOTO</td>
                        <td>Beloha</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>RAKOTO</td>
                        <td>Beloha</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>RAKOTO</td>
                        <td>Beloha</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}