import React, {useState, useContext} from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Contexts/LoginUserContext"
import SchoolLogo from "../resources/School_Logo.png"
import "../pages css/login.css"


function Login(){
    const [isWrong, setIsWrong] = useState(false)
    
    const navigate = useNavigate();

    const {setCurrentUser} = useContext(UserContext)

    async function signInUser(formData){
        const studentId = formData.get("student-id") || " "
        const enteredPassword = formData.get("student-password") || " "

        const studentRef = doc(db, "login_details", studentId);
        const studentInfo = await getDoc(studentRef);

        if(studentInfo.exists()){
            if (enteredPassword === studentInfo.data().password){
                navigate("/dashboard")
                setCurrentUser({studentId: studentId, ...studentInfo.data()})
                setIsWrong(false)
            } else {
                setIsWrong(true)
            } 
        } else{
            setIsWrong(true)
        }
    }

    return (
        <main className="login-page">
            <section className="login-aside">
                <div>
                    <img alt="Blessed Heritage Academy" src={SchoolLogo} className="login-logo"/>
                    <p>School Information Management System</p>
                    <p>Essential school records in one place!</p>
                </div>
            </section>
            <section className="login-container">
            <div className="small-screen-logo-container">
                <img alt="Blessed Heritage Academy" src={SchoolLogo} className="small-screen-login-logo"/>
                <p>School Information Management System</p>
            </div>
                <h1>Sign In</h1>
                <form action={signInUser}>
                    {isWrong && <p>Incorrect ID OR PASSWORD</p>}
                    <label htmlFor="student-id">STUDENT ID</label>
                    <input type="text" id="student-id" name="student-id" placeholder="Enter Id" />
                    <label htmlFor="student-password">PASSWORD</label>
                    <input type="password" id="student-password" name="student-password" placeholder="Enter Password" />
                    <div className="login-bottom">
                        <button id="portal-login-btn" type="submit">Login</button>
                        <span>Forgot Password?</span>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login