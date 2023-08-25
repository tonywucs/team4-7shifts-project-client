import {
    Text,
    IconQuestionCircle,
    IconArrowRight,
    SelectField,
    Link,
    IconClock,
    Button,
    IconSearch,
    CheckboxField
} from "@7shifts/sous-chef";
import "@7shifts/sous-chef/dist/index.css";
import './Modal.scss'

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ToolTipIcon from "../ToolTipIcon/ToolTipIcon";
import ModalFormList from "../ModalFormList/ModalFormList";

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

const ModalForm = ({ setIsOpen }) => {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([
        {
            label: 'Ron Swanson',
            value: 'sc_rs'
        },
        {
            label: 'Tom Haverford',
            value: 'sc_th'
        }])
    const [person, setPerson] = useState(null)

    const choices = [
        {
            label: 'Amy Poehler',
            value: 'lc_ap'
        },
        {
            label: 'Will Ferrel',
            value: 'lc_wf'
        }
    ]

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
            <main className="modalBackdrop">
                <div className="modal">
                    <div className="modal__employee"><span><Text as="h2" color="black">Vivian Cheung</Text></span></div>
                    <div className="modal__status"><Text as="body" color="white" emphasis="bold">Risk Detected</Text></div>
                    <div className="modal__schedule">
                        <div className="modal__timeFrame"><Text as="body" color="black">{times.start}</Text></div>
                        <IconArrowRight color="grey-400" />
                        <div className="modal__timeFrame"><Text as="body" color="black">{times.end}</Text></div>
                        <input type="checkbox" />
                        <span><Text as="body" color="black">Close</Text></span>
                        <input type="checkbox" />
                        <span><Text as="body" color="black">BD</Text></span>
                        <ToolTipIcon position="top" />
                    </div>
                    <div className="modal__scheduleExtras">
                        <Text as="body" color="blueberry-400"> or use common shift times</Text>
                        <div className="modal__hours">
                            <IconClock color="grey-400" />
                            <span><Text as="body">9 Hours</Text></span>
                        </div>
                    </div>
                    <div className="modal__backupsHeader">
                        <Text as="h3" color="black">Suggested Back Ups</Text>
                        <ToolTipIcon position="bottom" />
                    </div>
                    <div className="modal__caption">
                        <Text as="caption" color="black">Select all the employees you want as back up for Vivian.</Text>
                    </div>
                    <ModalFormList employees={employees} />
                    <div className="modal__search">
                        <SelectField
                            id="employees"
                            name="employees"
                            onBlur={function noRefCheck() { }}
                            onChange={handleChange}
                            options={choices}
                            placeholder="Search for an employee"
                        />
                    </div>
                    <div className="modal__searchBtn">
                        <span className="modal__searchIcon"><IconSearch color="grey-400" /></span>
                    </div>
                    <div className="button" onClick={handleClick}>Click Me</div>
                    <Button onClick={() => {
                        setIsOpen(false);
                        navigate("/");
                    }}>Close modal</Button>
                </div >
            </main >
        </>
    );
};

export default ModalForm;