import { CSSProperties, FormEvent } from "react";
import { Button, Input, Select } from "../../components/Form";

export function StudentForm (props: { onSubmit: (e: FormEvent) => {}, loading: boolean, create: boolean }) {
    const style: CSSProperties = {
        borderRight: '2px solid'
    }

    return <form action="" method="post" onSubmit={props.onSubmit}>
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
            <Button icon="fa fa-save" disabled={props.loading} color='primary'>Enregistrer</Button>
        </div>
    </form>
}