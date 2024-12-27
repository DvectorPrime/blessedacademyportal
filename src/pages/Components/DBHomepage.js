import React from "react";
import { useNavigate } from "react-router-dom";
import { tabItems } from "../page resources/nav-links";

function DBHome(){

    const navigate = useNavigate();

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
        <main className="dashboard-main ">
            <div className="dashboard-welcome">Hello David Abigail!</div>
            <div className="default-main">
                {mainElements}
            </div>
        </main>
    )
}

export default DBHome