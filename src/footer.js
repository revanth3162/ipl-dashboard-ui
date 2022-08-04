import React from "react";
const Footer = () => (
    <div className="footer">
        <span> © Copyright 2022, Revanth Baloju </span>
        <span>
            <a className="Links" href="https://www.linkedin.com/in/revanth-baloju/">
            <img src={process.env.PUBLIC_URL+"Teams_Logo/LinkedIn-Logo.png"}></img>
            </a>
            <a className="Links" href="https://www.linkedin.com/in/revanth-baloju/">
            <img src={process.env.PUBLIC_URL+"Teams_Logo/GitHub-Logo.png"}></img>
            </a>
        </span>
    </div>
);
export default Footer;