import React, { useState } from "react"
import NavItem from "./NavItem"
import homeIcon from "../../resources/home-icon.svg"
import paymentIcon from "../../resources/payment-icon.svg"
import assignmentIcon from "../../resources/assignment-icon.svg"
import recordIcon from "../../resources/academic-record-icon.svg"
import announcmentIcon from "../../resources/announcement-icon.svg"
import bookIcon from "../../resources/digital-resources-icon.svg"
import schoolCalendarIcon from "../../resources/school-calendar-icon.svg" 
import complaintIcon from "../../resources/complaint-icon.svg"
import logOutIcon from "../../resources/logout-icon.svg"
import menuIcon from "../../resources/menu-icon.svg"

function Navbar(){
    const [lengthen, setLengthen] = useState(false)

    const navItems = [
        "Home",
        "Payments",
        "Assignment Submissions",
        "Academic Records",
        "News / Announcments",
        "Digital Resources",
        "School Calendar",
        "Complaints / Suggestions",
        "Log Out"
    ]

    const navIcons = [
        homeIcon,
        paymentIcon,
        assignmentIcon,
        recordIcon,
        announcmentIcon,
        bookIcon,
        schoolCalendarIcon,
        complaintIcon,
        logOutIcon
    ]

    function showDetails(){
        setLengthen(prevState => !prevState)
    }

    const navStyle = window.innerWidth <= 600 ? {width : lengthen ? "170px" : "50px"} : {}

    const navItemsElements = navItems.map( (item, index) => <NavItem key={index} name={item} icon={navIcons[index]} isActive={item === "Payments"} lengthen={lengthen} setLengthen={setLengthen} />)

    return (
        <nav className="navigation-bar" style={navStyle}>
            <button onTouchStart={showDetails} className="menu-button"><img src={menuIcon} alt="menu" /><span style={{display:"none"}}>Menu</span></button>
            {navItemsElements}
        </nav>
    )
}

export default Navbar