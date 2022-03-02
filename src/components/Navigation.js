import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  // console.log(currentPage)
  return (
    <div>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link',  "w3-bar-item w3-button"}
            style={currentPage === 'Home' ? {color:'white', background:'black', paddingRight:"5px", paddingLeft:"5px"} : {color:'black', background:'white', paddingLeft:"0px"}}
          ><b>Khaleel</b> Paul-Green</a>
          {/* sidebar menu on small screens */}
          <nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display:"none", position:"absolute", left:"0px"}} id="mySidebar">
            <button 
            onClick={() => {document.getElementById("mySidebar").style.display = "none";}} 
            className="w3-bar-item w3-button w3-large w3-padding-16"
            >Close ×</button>
            <a href="#home" 
            onClick={() => {document.getElementById("mySidebar").style.display = "none"; handlePageChange('Home')}} 
            className="w3-bar-item w3-button"
            >HOME</a>
            <a href="#projects" 
            onClick={() => {document.getElementById("mySidebar").style.display = "none"; handlePageChange('Projects')}} 
            class="w3-bar-item w3-button"
            >PROJECTS</a>
            <a href="#about" 
            onClick={() => {document.getElementById("mySidebar").style.display = "none"; handlePageChange('About')}} 
            class="w3-bar-item w3-button"
            >ABOUT</a>
            <a href="#contact" 
            onClick={() => {document.getElementById("mySidebar").style.display = "none"; handlePageChange('Contact')}} 
            class="w3-bar-item w3-button"
            >CONTACT</a>
            <a href="#resume" 
            onClick={() => {document.getElementById("mySidebar").style.display = "none"; handlePageChange('Resume')}} 
            class="w3-bar-item w3-button"
            >RESUME</a>
          </nav>
          {/* open menu icon for small screens */}
          <div class="w3-right w3-hide-medium w3-hide-large">
            <button class="w3-bar-item w3-right w3-button w3-hide-large w3-hide-medium" 
              onClick={() => {
                if (document.getElementById("mySidebar").style.display === 'block') {
                    document.getElementById("mySidebar").style.display = 'none';
                // console.log('visible')
                } else {
                document.getElementById("mySidebar").style.display = 'block';
                }}}>
              <p><i class="fa fa-bars w3-right w3-xxlarge" style={{width:"50px", position:"absolute", right:"10px", top:"10px"}}></i></p>
            </button>
          </div>
          {/* <!-- Float links to the right. Hide them on small screens --> */}
          <div class="w3-right w3-hide-small">
            <a href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Projects' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Projects</a>
            <a href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'About' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >About</a>
            <a href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Contact' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Contact</a>
            <a href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link', "w3-bar-item w3-button"}
              style={currentPage === 'Resume' ? {color:'white', background:'black'} : {color:'black', background:'white'}}
            >Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
