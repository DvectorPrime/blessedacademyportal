import React from "react"
import { Link } from "react-router-dom"

function ErrorPage(){

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link to="/dashboard">Go back to Dashboard</Link>
        </div>
    )
}

export default ErrorPage