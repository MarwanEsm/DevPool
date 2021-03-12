import React from 'react';
import CandidateNavBar from '../CandidateUserPageComponents/NavBarCandidate';
import CandidateForm from '../CandidateUserPageComponents/CandidateForm';

function CandidatesUserPage (){
    
    return(
        <div>
            <CandidateNavBar/>
            <CandidateForm/>
        </div>
    )
}


export default CandidatesUserPage;