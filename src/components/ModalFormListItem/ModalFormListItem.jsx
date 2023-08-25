
import { CheckboxField, Text } from '@7shifts/sous-chef';
import { useState } from 'react';

const ModalFormListItem = () => {
    const [checkbox, setCheckbox] = useState(false);

    function handleCheckbox() {
        setCheckbox(!checkbox);
    }

    return (
        <>
            <div className="modal__backupsListItem">
                {checkbox ?
                    <CheckboxField
                        checked
                        name="backup"
                        onBlur={function noRefCheck() { }}
                        onChange={handleCheckbox}
                    /> :
                    <CheckboxField
                        name="backup"
                        onBlur={function noRefCheck() { }}
                        onChange={handleCheckbox}
                    />
                }

                <span className="modal__backups-name"><Text as="body" color="black" emphasis="bold">Ron Swanson</Text></span>
                <span className="modal__backups-level"><Text as="body" color="black">Intermediate Cook</Text></span>
            </div>
        </>
    );
};

export default ModalFormListItem;