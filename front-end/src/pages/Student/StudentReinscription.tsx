type StudentInscriptionProps = {

}

import { CSSProperties, FormEvent, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"

import { Input, Button, Select } from "../../components/Form"

type Class = {
    id: number,
    label: string,
    notation: string
}

export function StudentReinscription () {
    const { post, creating } = useFetch<Class[]>("/student")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        post(formData)
        form.reset()
    }

    return (
        <>
            <PageTitle title="Reinscription">
                <NavLink to="/student/list" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Lisitra</NavLink>
            </PageTitle>
            
            <form action="" method="post" onSubmit={handleSubmit}>
                <Input label="Rechercher un etudiant" placeholder="Rechercher..." />

                <div className="row">
                    <div className="col-6">
                        <Input label="Ancienne classe" />
                    </div>
                    <div className="col-3">
                        <Select label="Nouvelle classe" data={[
                            {
                                id: 1,
                                label: 'KTA 3'
                            }
                        ]} />
                    </div>
                    <div className="col-3">
                        <Select label="Nouveau groupe" data={[
                            {
                                id: 1,
                                label: 'G1'
                            }
                        ]} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Select label="Annee" data={[
                            {
                                id: 1,
                                label: 2024
                            }
                        ]} />
                    </div>
                    <div className="col-6">
                        <Input label="Participation (Ar)" placeholder="3 000 Ar" />
                    </div>
                </div>

                <div className="text-right">
                    <Button icon="fa fa-save" disabled={creating} color='primary'>Enregistrer</Button>
                </div>
            </form>
        </>
    )

}