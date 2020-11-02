import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom"
import ResourceTab from "./tabs/ResourceTab"
import HomeTab from "./tabs/HomeTab"

class App extends React.Component{
    constructor(){
        super()
        this.panels = []
        this.openSideMenu = this.openSideMenu.bind(this)
        this.closeSideMenu = this.closeSideMenu.bind(this)
        this.accordion = this.accordion.bind(this)
    }

    openSideMenu(){
        document.querySelector(".side-menu").classList.add("open")
    }
    closeSideMenu(){
        document.querySelector(".side-menu").classList.remove("open")
    }
    
    accordion(event){
        // Toggle the clicked panel display between none and block
        let panel = event.target.parentElement.nextElementSibling

        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }

        // Set the previous panel display to none if any(i.e if defined)
        let prevPanel = this.panels.pop()

        if(prevPanel !== undefined){
            prevPanel.style.display = "none"
        }    
        // Keep track of the open panel
        this.panels.push(panel) 
    }

    render(){
        return(
        <BrowserRouter>
        <div className="main-grid-container">
            
            <header className="header">
                <div className="brand-name">
                    <button onClick={this.openSideMenu} className="home-button">
                        &#9776;
                    </button>
                    <Link to="/">eClassRoom</Link>
                </div>
                <div className="nav-links">
                    <div>
                        <span>
                            <i className="fa fa-user">
                                <div className="dropdown-content">
                                    {
                                    <a href="#">Profile</a>
                                    /*
                                    // Add fontawesome accordion and styles
                                    <a href="#">Site Setup</a>
                                    <a href="#">Help</a>
                                    <a href="#">Log Out</a>
                                    */}
                                </div>
                            </i>
                        </span>
                    </div>
                </div>
            </header>
            <aside className="side-menu">
                <h2>Site Tabs</h2>
                <button onClick={this.closeSideMenu} className="side-menu-close-button">X</button>
                <ul className="side-menu-content">
                    <li onClick={this.accordion} className="accordion" >
                        <Link to="#">JAM100W</Link>
                    </li>
                                             
                    <li onClick={this.accordion} className="accordion" >
                        <Link to="#">MAM1009</Link>
                    </li>
                        
                </ul>
            </aside>
            <main className="main"> 
                <Route path="/" exact component={HomeTab} />
                <Route path="/resources" component={ResourceTab} />
            </main>
            <footer className="footer">
                <p>All rights reserved</p>
            </footer>
        </div>
        </BrowserRouter>
    )}

}

export default App
