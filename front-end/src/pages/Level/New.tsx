import { FormEvent } from "react"
import { useFetch } from "../../hooks/useFetch"
import { NavLink } from "react-router-dom"
import { PageTitle } from "../../components/PageTitle"

import { Input, Textarea, Button } from "../../components/Form"

type Level = {
    id: number,
    label: string,
    notation: string
}

export function New () {
    const { post, creating } = useFetch<Level[]>("/levels")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        post(formData)
        form.reset()
    }

    return (
        <>
            <PageTitle title="Sokajy vaovao">
                <NavLink to="/level/list" className="btn btn-primary"><i className="fa fa-list mr-2"></i>Lisitra</NavLink>
            </PageTitle>
            
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Input label="Label" name="label" />
                    </div>
                    <div className="col-6">
                        <Input label="Notation" name="notation" />
                    </div>
                </div>

                <Textarea label="Description" name="description" />
                <Button icon="fa fa-save" disabled={creating} color='primary'>Enregistrer</Button>
            </form>
        </>
    )

}