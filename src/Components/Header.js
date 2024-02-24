import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>MentalTherapy</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Therapists</a></li>
                    <li><a href="/">Support-Group</a></li>
                    <li><a href="/">Self-Assessment</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
             </nav>
             <div className="btn">
                <button type="button">Signup/Login</button>
             </div>
        </div>
    );
}
export default Header;