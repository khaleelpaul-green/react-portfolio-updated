import React from "react";
import resume from '../downloads/dev-resume.pdf';
import resumess from '../imgs/resume-ss.jpg'

export default function Resume () {
    return (
        <div class="w3-display-container w3-content w3-center w3-wide w3-padding-32 myPadding">
            <a href="https://docs.google.com/document/d/1PReCf5V26-ZzfZlRCkBTUr2UminkzM99zM7udKU2Ahc/edit?usp=sharing"><img class="w3-image" src={resumess} alt="My Resume" style={{height: "100%", width:"1000px" }} /></a>
        </div>
    )
}
