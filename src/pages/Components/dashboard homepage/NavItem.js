import React from "react"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavItem({name, icon, lengthen, setLengthen, link}){
    const location = useLocation()
    const active = location.pathname === link ? "nav-active" : ""

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