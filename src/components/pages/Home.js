import React from "react";
import image1 from '../imgs/Coding-vs-programming.jpg';

export default function Home () {
    return (
        <div class="w3-display-container w3-content w3-wide myPadding">
            <img class="w3-image" src={image1} alt="Code" style={{ filter: "brightness(60%)", width: "1500px", height: "1000px" }} />
            <div class="w3-display-middle w3-margin-top w3-left">
                <h1 class="w3-xxlarge w3-text-white w3-hide-small"><span class="w3-padding w3-black w3-opacity-normal"><b>Hey, I'm Khaleel.</b></span>
                    <br />
                    <span class="w3-text-white" style={{ fontWeight: "500" }}>
                        MERN stack developer from Markham, Ontario. I create custom websites
                        and refactor existing ones.
                    </span>
                </h1>
                <h1 class="w3-xxxlarge w3-text-white w3-hide-medium w3-hide-large" style={{marginTop:"-400px"}}>
                    <span class="w3-black w3-opacity-normal">
                        <b>Hey, I'm Khaleel.</b>
                    </span>
                </h1>
            </div>
        </div>
    )
}