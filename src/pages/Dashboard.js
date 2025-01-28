import React, { useEffect, useContext } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { UserContext } from "./Contexts/LoginUserContext"
import Header from "./Components/dashboard homepage/PortalHeader"
import Navbar from "./Components/dashboard homepage/Navbar"
import DBHome from "./Components/dashboard homepage/DBHomepage"
import "../pages css/dashboard.css"

function Dashboard(){
    const { currentUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser){
            navigate("/")
            return
        }
    
    }, [currentUser])

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