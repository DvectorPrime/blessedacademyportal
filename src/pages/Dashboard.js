import React, { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Components/PortalHeader"
import Navbar from "./Components/Navbar"
import DBHome from "./Components/DBHomepage"
import "../pages css/dashboard.css"

function Dashboard(){
    const location = useLocation()

    const dbMain = location.pathname === "/dashboard" ? <DBHome /> : <Outlet />

    return(
        <div className="dashboard-container">
            <Header />
            <Navbar />
            {dbMain}
        </div>
    )
}

export default Dashboard