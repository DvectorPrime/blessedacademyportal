import React, {useContext, useEffect, useState,} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "./Contexts/LoginUserContext"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firebase';
import profileIcon from "../resources/nav-profile.svg"
import "../pages css/profile.css"

function Profile(){
    const { currentUser } = useContext(UserContext)
    const studentId = currentUser.studentId || 'NA'

    const navigate = useNavigate()

    const [studentProfileDetails, setStudentProfileDetails] = useState("");
    const [studentFullName, setStudentFullName] = useState(undefined)

    async function getStudentProfileDetials() {
        try {
            const profileDetailsRef = doc(db, "student_profile_collection", studentId)
            const profileDetails = await getDoc(profileDetailsRef);

            const dateOfBirth = new Date(profileDetails.data().DOB)
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            const convertedDateofBirth = `${months[dateOfBirth.getMonth()]} ${dateOfBirth.getDate()}, ${dateOfBirth.getFullYear()}`
    
            setStudentProfileDetails({...profileDetails.data(), DOB: convertedDateofBirth})
            setStudentFullName(` ${currentUser.firstName.toUpperCase()} ${currentUser.lastName.toUpperCase()} ${currentUser.otherNames && currentUser.otherNames.toUpperCase()}`)
        } catch (error) {
            alert("An Error Occured")
        }
    }

    useEffect(() => {
        getStudentProfileDetials();
    }, [currentUser])

    return(
        <main className="dashboard-main profile">
            <section className="profile-header">
                <img src={profileIcon}  alt="Student" />
                <p>
                    {studentFullName}
                </p>
            </section>
            <section>
            <fieldset>
                    <legend>House Address</legend>
                    <p>{`${studentProfileDetails.houseAddress}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Gender</legend>
                    <p>{`${studentProfileDetails.gender}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Date of Birth</legend>
                    <p>{`${studentProfileDetails.DOB}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Class</legend>
                    <p>{`${studentProfileDetails.class}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Department</legend>
                    <p>{`${studentProfileDetails.department}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Student Email Address</legend>
                    <p>{`${studentProfileDetails.studentEmailAddress}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Parent/Guardian's Name</legend>
                    <p>{`${studentProfileDetails.parentName}`}</p>
                </fieldset>
                <fieldset>
                    <legend>Parent/Guardian's Phone Number</legend>
                    <p>{`${studentProfileDetails.parentPhoneNumber}`}</p>
                </fieldset>
            </section>
            <section>
                <p>If you would like to change or alter the any of the above information. Contact the school management.</p>
            </section>
        </main>
    )
}

export default Profile