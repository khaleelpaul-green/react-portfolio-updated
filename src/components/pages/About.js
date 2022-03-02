import React from "react";
import avatar from '../imgs/github-avatar.jpg';
import resume from '../downloads/dev-resume.pdf';
import { Link } from "react-router-dom";

export default function About () {
    return(
        <div class="w3-container myPadding w3-padding-16">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-32 w3-xxlarge">About Me</h3>

            {/* about me description */}
            <div className="w3-padding-16" style={{lineHeight:"2"}}>
                <p><span class="w3-large" style={{lineHeight:"1.5"}}>Hello, my name is</span> <br/>
                <b><span class="w3-xxlarge" style={{lineHeight:"1.5"}}>Khaleel Paul-Green</span></b> <br/>
                I'm a full-stack developer specialized in frontend and backend development for scalable web apps. 
                To gain a better understanding of what I can do, check out my <a href="https://docs.google.com/document/d/1PReCf5V26-ZzfZlRCkBTUr2UminkzM99zM7udKU2Ahc/edit?usp=sharing">resume</a>.
                </p>
            </div>

            {/* skills overview */}
            <div class="w3-container" style={{padding:"108px 16px", backgroundColor:"rgb(221, 221, 221)"}}>
                <h3 class="w3-center"><b>Skills Overview</b></h3>
                <p class="w3-center w3-large">
                    Below is a quick overview of my main technical skill sets and tools I use. Want to find 
                    out more about my experience? <a href="https://docs.google.com/document/d/1PReCf5V26-ZzfZlRCkBTUr2UminkzM99zM7udKU2Ahc/edit?usp=sharing">Check out my online resume</a>.
                </p>
                <div class="w3-row-padding w3-center" style={{marginTop:"44px"}}>
                    <div class="w3-third skill-list-border">
                        <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
                        <p class="w3-large"><b>Frontend</b></p>
                        <ul class="w3-left-align skill-list">
                            <li><span>React</span></li>
                            <li><span>Javascript</span></li>
                            <li><span>HTML/CSS</span></li>
                            <li><span>Handlebars</span></li>
                            <li><span>Bootstrap/jQuery/FA</span></li>
                        </ul>
                    </div>
                    <div class="w3-third skill-list-border">
                        <i class="fa fa-server w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large"><b>Backend</b></p>
                        <ul class="w3-left-align skill-list">
                            <li><span>REST</span></li>
                            <li><span>Node/Express</span></li>
                            <li><span>MongoDB/Mongoose</span></li>
                            <li><span>MySQL/Sequalize</span></li>
                            <li><span>User Authentication</span></li>
                            <li><span>Sessions (JWT Decode)</span></li>
                            <li><span>Graphql/Apollo Client</span></li>
                        </ul>
                    </div>
                    <div class="w3-third skill-list-border">
                        <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
                        <p class="w3-large"><b>Other</b></p>
                        <ul class="w3-left-align skill-list">
                            <li><span>Postman</span></li>
                            <li><span>Unit Testing</span></li>
                            <li><span>Heroku</span></li>
                            <li><span>Github</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}