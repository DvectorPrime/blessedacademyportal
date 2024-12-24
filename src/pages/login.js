import React from "react"
import SchoolLogo from "../resources/School_Logo.png"
import "../pages css/login.css"

function Login(){

    return (
        <main className="login-page">
            <section className="login-aside">
                <div>
                    <img alt="Blessed Heritage Academy" src={SchoolLogo} className="login-logo"/>
                    <p>School Information Management System</p>
                    <p>Essential school records in one place!</p>
                </div>
            </section>
            {/* <div className="small-screen-logo-container">
                <img alt="Blessed Heritage Academy" src={SchoolLogo} className="small-screen-login-logo"/>
            </div> */}
            <section className="login-container">
            <div className="small-screen-logo-container">
                <img alt="Blessed Heritage Academy" src={SchoolLogo} className="small-screen-login-logo"/>
                <p>School Information Management System</p>
            </div>
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="student-id">STUDENT ID</label>
                    <input type="text" id="student-id" name="student-id" placeholder="Enter Id" />
                    <label htmlFor="portal-password">PASSWORD</label>
                    <input type="password" id="portal-password" name="portal-password" placeholder="Enter Password" />
                    <div className="login-bottom">
                        <button type="button" id="portal-login-btn">Login</button>
                        <span>Forgot Password?</span>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login