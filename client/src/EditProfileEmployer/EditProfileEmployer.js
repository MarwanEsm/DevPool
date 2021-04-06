import React from 'react';
import EditProfieEmpForm from './EditProfileEmployerForm';
import IndividualEmployerNavBar from './NavBarEditProfileEmp';

function EditProfileEmployer () {
    return (
        <div>
            <div>
                <IndividualEmployerNavBar/>
            </div>
            <div>
                <EditProfieEmpForm/>
            </div>
        </div>
    )
}

export default EditProfileEmployer;