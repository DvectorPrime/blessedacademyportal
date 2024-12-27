import React from "react"
import { Link } from "react-router-dom";

function NavItem({name, icon, isActive, lengthen, setLengthen, link}){
    const active = isActive ? "nav-active" : ""

    const textStyle = window.innerWidth <= 600 ? {display : lengthen ? "block": "none"} : {}
    const navStyle = window.innerWidth <= 600 ? {
        justifyContent : lengthen ? "flex-start": "center"
    } : {};
    
    function handleClick(){
        setLengthen(false)
    }

    return(
        <Link onClick={handleClick} className={`nav-item ${active}`} to={link} style={navStyle}>
            <img className="nav-icon" src={icon} alt="" /> 
            <span style={textStyle}>{name}</span>
        </Link>
    )
}

export default NavItem