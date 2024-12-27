import React, { useState } from "react"
import NavItem from "./NavItem"
import { navItems } from "../page resources/nav-links"
import menuIcon from "../../resources/menu-icon.svg"

function Navbar(){
    const [lengthen, setLengthen] = useState(false)

    function showDetails(){
        setLengthen(prevState => !prevState)
    }

    const navStyle = window.innerWidth <= 600 ? {width : lengthen ? "170px" : "50px"} : {}

    const navItemsElements = navItems.map( ({name, icon, link}, index) => 
        <NavItem 
            key={index} 
            name={name} 
            icon={icon} 
            link={link}
            isActive={name === "Home"} 
            lengthen={lengthen} 
            setLengthen={setLengthen} />)

    return (
        <nav className="navigation-bar" style={navStyle}>
            <button onTouchStart={showDetails} className="menu-button"><img src={menuIcon} alt="menu" /><span style={{display:"none"}}>Menu</span></button>
            {navItemsElements}
            {/* Remember to remove log out and make it a separate button because it has to carry some functionality. */}
        </nav>
    )
}

export default Navbar