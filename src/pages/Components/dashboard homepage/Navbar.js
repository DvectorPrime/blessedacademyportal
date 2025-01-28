import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"
import { navItems } from "../../page resources/nav-links"
import menuIcon from "../../../resources/menu-icon.svg"
import logOutIcon from "../../../resources/logout-icon.svg"
import { UserContext } from "../../Contexts/LoginUserContext"

function Navbar(){
    const [lengthen, setLengthen] = useState(false)

    const {setCurrentUser} = useContext(UserContext)
    const navigate = useNavigate();

    function showDetails(){
        setLengthen(prevState => !prevState)
    }

    function logOut(){
        setCurrentUser("");
        navigate("/")
    }

    const navStyle = window.innerWidth <= 600 ? {width : lengthen ? "170px" : "50px", justifyContent : lengthen ? "flex-start": "center"} : {};
    const textStyle = window.innerWidth <= 600 ? {display : lengthen ? "block": "none"} : {}

    const navItemsElements = navItems.map( ({name, icon, link}, index) => 
        <NavItem 
            key={index} 
            name={name} 
            icon={icon} 
            link={link}
            lengthen={lengthen} 
            setLengthen={setLengthen} />)

    return (
        <nav className="navigation-bar" style={navStyle}>
            <button onTouchStart={showDetails} className="menu-button"><img src={menuIcon} alt="menu" /><span style={{display:"none"}}>Menu</span></button>
            {navItemsElements}
            <button onClick={logOut} className="nav-item" style={navStyle}>
                <img className="nav-icon" src={logOutIcon} alt="log-out" /> 
                <span style={textStyle}>Log Out</span>
            </button>
        </nav>
    )
}

export default Navbar