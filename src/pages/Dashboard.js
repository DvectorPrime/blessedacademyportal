import React from "react"
import Header from "./Components/PortalHeader"
import Navbar from "./Components/Navbar"
import "../pages css/dashboard.css"

function Dashboard(){

    return(
        <div className="dashboard-container">
            <Header />
            <Navbar />
            <main></main>
        </div>
    )
}

export default Dashboard