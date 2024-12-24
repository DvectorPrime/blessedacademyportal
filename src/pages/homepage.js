import React from "react"
import schoolLogo from "../resources/School_Logo.png"

const HomePage = () => {
    return(
        <div className="body">
            <header id="hp-header">
                <div id="school-name">
                    <h1 className="homepage-head">Blessed Heritage Academy</h1>
                </div>
                <ul id="homepage-nav">
                    <li>HOME</li>
                    <li>SCHOOL PORTAL</li>
                    <li>CONTACT</li>
                </ul>
            </header>
            <main className="homepage-main">
                <img className="homepage-logo" src={schoolLogo} alt="school logo" />
                {/*<h1>Blessed Heritage Academy</h1>*/}
                <p className="mission"><em>We aim at developing academic excellence with character development</em></p>
                <button>School Portal</button>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default HomePage