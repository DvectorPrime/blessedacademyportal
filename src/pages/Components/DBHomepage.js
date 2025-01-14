import React, {useState, useContext, useEffect} from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { UserContext } from "../Contexts/LoginUserContext";
import { useNavigate } from "react-router-dom";
import { tabItems } from "../page resources/nav-links";

function DBHome(){

    const navigate = useNavigate();

    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        if (!currentUser){
            navigate("/")
            return
        }

    }, [currentUser])

    const mainElements = tabItems.map(({name, icon, link}) => {
        function handleClick(){
            navigate(link)
        }

        return(
            <button className="home-tab" onClick={handleClick}>
                <img alt={name} src={icon} className="tab-image" />
                <span className="tab-text">{name}</span>
            </button>
        )
    })

    return (
        <main className="dashboard-main">
            <div className="dashboard-welcome">Hello {currentUser.firstName} {currentUser.lastName}!</div>
            <div className="default-main">
                {mainElements}
            </div>
        </main>
    )
}

export default DBHome