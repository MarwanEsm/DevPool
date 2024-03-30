import React from 'react';
import LoginPageForm from '../LoginPageComponents/LoginPageForm';
import LoginNavBar from '../LoginPageComponents/NavBarLogIn';
// import Footer from '../LandingPageComponents/Footer'

function LoginPage() {
    return (
        <div>
            <LoginNavBar />
            <LoginPageForm />
            {/* <Footer/> */}
        </div>
    )
}

export default LoginPage;