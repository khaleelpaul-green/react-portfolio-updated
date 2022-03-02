import React from "react";

export default function Contact () {

  function test(event) {
    let msg = document.getElementById('message');
    let name = event.target.value
    msg.innerHTML = '';
    if (name === ''){
      msg.innerHTML = '<br>This field is required.';
      // alert('This field is required.');
    }
  } 

    return(
      <div class="w3-container w3-padding-32 myPadding" id="contact">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-xxlarge">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <input class="w3-input w3-border" type="text" onBlur={test} placeholder="Name" required name="Name"/>
          <input class="w3-input w3-section w3-border" type="email" onBlur={test} placeholder="Email" required name="Email"/>
          <input class="w3-input w3-section w3-border" type="text" onBlur={test} placeholder="Subject" required name="Subject"/>
          <input class="w3-input w3-section w3-border" type="text" onBlur={test} placeholder="Message" required name="Message"/>
          <div id='message' style={{position:'relative', bottom:'35px'}}></div>
          <button class="w3-button w3-black w3-section" type="submit" formTarget='_self' >
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>

        {/* links */}
        <div class="w3-center w3-container" style={{padding:"108px 16px", backgroundColor:"rgb(221, 221, 221)"}}>
          <h3><b>Links</b></h3>
          <p class="w3-large">
            Looking for more? Visit the links below to view a full list of my projects, as well as alternative ways to reach me for further discussion.
          </p>
          <div class="w3-bar w3-row-padding w3-padding-16">
            <div class="w3-bar-item">
              <a href="https://github.com/khaleelpaul-green"><i class="fa fa-github w3-xxxlarge"></i></a>
            </div>
            <div class="w3-bar-item">
              <a href="https://www.linkedin.com/in/khaleelpaul-green"><i class="fa fa-linkedin w3-xxxlarge"></i></a>
            </div>
            <div class="w3-bar-item">
              <a href="mailto:khaleelpaulgreen.code@gmail.com" target="_top"><i class="fa fa-envelope w3-xxxlarge"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
}
