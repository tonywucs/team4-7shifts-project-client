import {
    Text,
    IconQuestionCircle,
    IconArrowRight,
    SelectField,
    Link,
    IconClock,
    Button
} from "@7shifts/sous-chef";
import "@7shifts/sous-chef/dist/index.css";
import './Modal.scss'

import { useState } from 'react';

const times = {
    start: "3:00 PM",
    end: "12:00 AM"
}

const people = {
    sc_rs: "Ron Swanson",
    sc_th: "Tom Haverford",
    lc_ap: "Amy Poehler",
    lc_wf: "Will Ferrel"
}

const ModalForm = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [employees, setEmployees] = useState([])
    const [person, setPerson] = useState(null)

    // If person exists and is an employee then add element
    function handleClick() {
        if (people[person] && !employees.includes(people[person])) {
            setEmployees([...employees, people[person]])
        }
    }

    function handleChange(input) {
        const selectedPerson = `${input.value}`
        setPerson(selectedPerson)
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <main className="modalBackdrop">
            {isOpen && (
                    <div className="modal">
                        <div className="modal__employee"><span><Text as="h2">Vivian Cheung</Text></span></div>
                        <div className="modal__status"><Text as="body" color="white">Risk Detected</Text></div>
                        <div className="modal__schedule">
                            <div className="modal__startTime"><Text as="body">{times.start}</Text></div>
                            <IconArrowRight color="grey-400" />
                            <div className="modal__endTime"><Text as="body">{times.end}</Text></div>
                            <input type="checkbox" />
                            <span><Text as="body">Close</Text></span>
                            <input type="checkbox" />
                            <span><Text as="body">BD</Text></span>
                            <IconQuestionCircle color="grey-400" />
                        </div>
                        <div className="modal__scheduleExtras">
                            <Link
                                href="/"
                                onClick={function noRefCheck() { }}
                                theme="primary"
                            >
                                <Text as="body" color="blueberry-400"> or use common shift times</Text>
                            </Link>
                            <IconClock color="grey-400" />
                            <div className="modal__hours"><Text as="body">9 Hours</Text></div>
                        </div>

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
                        <div className="button" onClick={handleClick}>Click Me</div>
                        <Button onClick={() => setIsOpen(false)}>Close modal</Button>
                        {employees.length > 0 ?
                            employees.map((val) => {
                                return (
                                    <h1>{val}</h1>
                                );
                            }) : ""}
                    </div>
                
            )}
            </main>
        </>
    );
};

export default ModalForm;