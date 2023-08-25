import React from 'react';
import ModalFormListItem from '../ModalFormListItem/ModalFormListItem';

const ModalFormList = ({ employees }) => {
    return (
        <div className="modal__backupsList">
            {
                employees.length > 0 ?
                    employees.map((data) => {
                        return (
                            <ModalFormListItem data={data} />
                        );
                    }) : ""
            }
        </div>
    );
};

export default ModalFormList;