type StudentInscriptionProps = {

}

import { CSSProperties, FormEvent, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"

import { Input, Button, Select } from "../../components/Form"
import { StudentForm } from "."

type Class = {
    id: number,
    label: string,
    notation: string
}

export function StudentInscription () {
    const { post, creating } = useFetch<Class[]>("/classes")

    const style: CSSProperties = {
        borderRight: '2px solid'
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        post(formData)
        form.reset()
    }

    return (
        <>
            <PageTitle title="Inscription">
                <NavLink to="/student/list" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Lisitra</NavLink>
            </PageTitle>

            <StudentForm create={true} onSubmit={handleSubmit} loading={creating} />
            
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-2 border-primary" style={style}>
                        <span className="font-weight-bold">Etudiant</span>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <Input label="Nom" name="firstname" />
                            </div>
                            <div className="col-6">
                                <Input label="Prenoms" name="lastname" />
                            </div>
                            <div className="col-3">
                                <Input label="Date de naissance" name="birthdate" type="date" />
                            </div>
                            <div className="col-3">
                                <Input label="Lieu de naissance" name="birthplace" />
                            </div>
                            <div className="col-6">
                                <Input label="Adresse" name="adress" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-2 border-primary" style={style}>
                        <span className="font-weight-bold">Parent</span>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <Input label="Pere" name="father" />
                            </div>
                            <div className="col-6">
                                <Input label="Mere" name="mother" />
                            </div>
                            <div className="col-6">
                                <Input label="Tuteur" name="tutor" />
                            </div>
                            <div className="col-6">
                                <Input label="Contact" name="contact" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-2 border-primary" style={style}>
                        <span className="font-weight-bold">Classe</span>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <Input label="Participation (Ar)" placeholder="3 000 Ar" />
                            </div>
                            <div className="col-6">
                                <Select data={[
                                    {
                                        id: 1,
                                        label: 'KTA 3 G1'
                                    }
                                ]} label="Classe" name="class" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <Button icon="fa fa-save" disabled={creating} color='primary'>Enregistrer</Button>
                </div>
            </form>
        </>
    )

}