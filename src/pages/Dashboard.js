import React from "react"
import Header from "./Components/PortalHeader"
import Navbar from "./Components/Navbar"
import DBHome from "./Components/DBHomepage"
import "../pages css/dashboard.css"

function Dashboard(){

    return(
        <div className="dashboard-container">
            <Header />
            <Navbar />
            <DBHome />
        </div>
    )
}

export default Dashboard