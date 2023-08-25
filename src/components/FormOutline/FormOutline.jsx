// import React from 'react'
import { useState } from 'react'
import { Form, FormRow, TextField, FormFooter, Button, SelectField } from '@7shifts/sous-chef'

const people = {
    sc_rs: "Ron Swanson",
    sc_th: "Tom Haverford",
    lc_ap: "Amy Poehler",
    lc_wf: "Will Ferrel"
}

const FormOutline = () => {

    const [employees, setEmployees] = useState([])
    const [person, setPerson] = useState(null)

    function handleSubmit() {
        if (people[person] && !employees.includes(people[person])) {
            setEmployees([...employees, people[person]])
        }
    }

    function handleChange(input) {
        const selectedPerson = `${input.value}`
        setPerson(selectedPerson)
    }

    // Example of UI update on submit / click event
    return (
        <>
        {employees.length > 0 ?
            employees.map((val) => {
                return (
                    <h1>Hello World</h1>
                );
            }) : ""}
            <Form onSubmit={handleSubmit}>
                <FormRow>
                </FormRow>
                <SelectField
                    id="employees"
                    name="employees"
                    onBlur={function noRefCheck() { }}
                    onChange={handleChange}
                    options={[
                        {
                            label: 'Senior Cook',
                            options: [
                                {
                                    label: 'Ron Swanson',
                                    value: 'sc_rs'
                                },
                                {
                                    label: 'Tom Haverford',
                                    value: 'sc_th'
                                }
                            ]
                        },
                        {
                            label: 'Line Cook',
                            options: [
                                {
                                    label: 'Amy Poehler',
                                    value: 'lc_ap'
                                },
                                {
                                    label: 'Will Ferrel',
                                    value: 'lc_wf'
                                }
                            ]
                        }
                    ]}
                    placeholder="Search for an employee"
                />
                <FormFooter
                    actions={{
                        primary: <Button onClick={() => { }}>Save</Button>
                    }}
                />
            </Form>
        </>
    );
};

export default FormOutline;