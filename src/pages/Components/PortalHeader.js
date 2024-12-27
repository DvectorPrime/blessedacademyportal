import React from "react"
import Logo from "../../resources/CroppedLogo.png"
import ProfileAvatar from "../../resources/profile-avatar.svg"
import ArrowDown from "../../resources/arrow-down.svg"
import Person from "../../resources/person-avatar.svg"
import ChangePassword from "../../resources/change-icon.svg"
import LogOut from "../../resources/logout-icon.svg"

function Header(){

    return(
        <header className="dashboard-heading">
            <div className="school-name-container">
                <img src={Logo} alt="" />
                <h1>Blessed's Heritage Academy Portal</h1>
            </div>
            <div className="dashboard-dropdown">
                <button className="profile-dropdown-button">
                    <span style={{display : "none"}}>Profile DropDown</span>
                    <img src={ProfileAvatar} alt="Profile DropDown" />
                    <img src={ArrowDown} alt="Profile DropDown" />
                </button>
                <div class="dropdown-content">
                    <a className="dropdown-item" href="#"><img src={Person} alt="" /> <span>My Profile</span></a>
                    <a className="dropdown-item" href="#"><img src={ChangePassword} alt="" /> <span>Change Password</span></a>
                    <a className="dropdown-item hor-line" href="#"><img src={LogOut} alt="" /> <span>Log Out</span></a>
                </div>
            </div>
        </header>
    )
}

export default Header