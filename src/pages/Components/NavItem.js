import React from "react"

function NavItem({name, icon, isActive, lengthen, setLengthen}){
    const active = isActive ? "nav-active" : ""

    const textStyle = window.innerWidth <= 600 ? {display : lengthen ? "block": "none"} : {}
    const navStyle = window.innerWidth <= 600 ? {
        justifyContent : lengthen ? "flex-start": "center"
    } : {};
    
    function handleClick(){
        setLengthen(false)
    }

    return(
        <a onClick={handleClick} className={`nav-item ${active}`} href="#" style={navStyle}><img className="nav-icon" src={icon} alt="" /> <span style={textStyle}>{name}</span></a>
    )
}

export default NavItem