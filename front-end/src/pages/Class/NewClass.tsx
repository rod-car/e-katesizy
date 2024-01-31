import { FormEvent, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"

import { Input, Button, Select } from "../../components/Form"

type Class = {
    id: number,
    label: string,
    notation: string
}

export function NewClass () {
    const { post, creating } = useFetch<Class[]>("/classes")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        post(formData)
        form.reset()
    }

    return (
        <>
            <PageTitle title="Kilasy vaovao">
                <NavLink to="/class/list" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Lisitra</NavLink>
            </PageTitle>
            
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Select data={[
                            {
                                id: 1,
                                label: 'KTA 3'
                            }
                        ]} label="Level" name="level" />
                    </div>
                    <div className="col-6">
                        <Select data={[
                            {
                                id: 1,
                                label: 'G1'
                            }
                        ]} label="Group" name="group" />
                    </div>
                </div>
                <Button icon="fa fa-save" disabled={creating} color='primary'>Enregistrer</Button>
            </form>
        </>
    )

}