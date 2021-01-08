import React from "react"
import { Link } from "react-router-dom"

import './style.css'
import { connect } from "react-redux"

class Header extends React.Component{
    //local state to manage form inputs
    state = {
        email:"",
        password:""
    }

    handleChange = (event) => {
        /* Funtcion to handle each keyboard stroke */
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        /* function to handle form submission */
        // prevent form default submission
        event.preventDefault()  
        // check for user with matching email/username
        const student = this.props.students.find(student => student.email === this.state.email)
        student ? (
            // if email/username found check for password
            student.password === this.state.password ? (
                this.props.loginUser(student.id)
            ):(
                alert("passwords dont match")
            )
        ):(
            alert("username not found")
        )
        // if all good close the overlay form 
        this.closeLoginForm()
    }
    openSideMenu(){
        document.querySelector(".side-menu").classList.add("open")
    }
    closeSideMenu(){
        document.querySelector(".side-menu").classList.remove("open")
    }

    openLoginForm = () =>{
        document.querySelector(".login-form-overlay").classList.add("open")
    }
    closeLoginForm = () =>{
        document.querySelector(".login-form-overlay").classList.remove("open")
    }

    siteMenuAccordion = (event) =>{
        let panel = event.target.parentElement.nextElementSibling

        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block";
        }
    }
    navBarAccordion = (event) =>{
        let panel = event.target.nextElementSibling

        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    }
    render(){      
        const student = this.props.students.find(student => student.isLoggedIn === true)
        const navLinks = student ? (
            <div className="loggedIn nav-links">
                <i className="fa fa-envelope"></i>
                <i onClick={this.navBarAccordion} className="fa fa-bell"></i>
                    <ul className="panel">
                        <li>Notifications</li>
                        <li>Notifications</li>
                    </ul>
                <i onClick={this.navBarAccordion} className="fa fa-user-circle"></i>
                    <ul className="panel">
                        <li>{student.email}</li>
                        <li><Link to='/'>Edit profile</Link></li>
                        <li>Report Card</li>
                        <li>Settings</li>
                        <li>Help</li>
                        <li>Log Out</li>
                    </ul>
            </div>
        ):(
            <div className="open-access nav-links">
                <Link to="/register"><button>REGISTER</button></Link>
                <button onClick={this.openLoginForm}>LOGIN</button>
            </div>
        ) 
        // course list on site menu
        // breaks when a student is nnot registered to any course
        const courseList = student ? ( student.courses.map( course => 
            <ul className="side-menu-content" key={course.courseCode}>
                <li onClick={this.siteMenuAccordion} className="accordion" >
                    <Link to="/">{course.courseCode}</Link>
                </li>
                    <ul className="course-tools">
                        <li><Link to="/courseCode/resources">Resources</Link></li>
                        <li><Link to="/courseCode/lectures">Lectures</Link></li>
                        <li><Link to="/">announcements</Link></li>
                    </ul>
            </ul>
            )           
        ):(
            <ul></ul>
        )
        return(
            <div>
            <header className="header">
                <div className="brand-name">
                    <button onClick={this.openSideMenu} className="home-button">
                        &#9776;
                    </button>
                    <Link to="/">LearnX</Link>
                </div>
                <div className="nav-links">
                    {navLinks}
                </div>
            </header>
            <aside className="side-menu">
                <h2>Site Tabs</h2>
                <button onClick={this.closeSideMenu} className="side-menu-close-button">X</button>
                {courseList}
                <br/>
                <ul className="side-menu-content non-reg">
                <li><Link to="/"  onClick={this.siteMenuAccordion} className="accordion">QUIZ</Link></li>
                    <ul className="course-tools open-access">
                        <li><Link to="/">Maths Quiz</Link></li>
                        <li><Link to="/">English Quiz</Link></li>
                        <li><Link to="/">General Knowledge</Link></li>
                    </ul>
                <li><Link to="/">LearnX Answers</Link></li>
                <li><Link to="/">Register for a Course</Link></li>
            </ul>
            </aside>
            <div>
                <div className="login-form-overlay">
                    <form onSubmit={this.handleSubmit} className="form-content">
                        
                        <div className="container">
                            <label><b>Username</b></label>
                            <input 
                                type="text" 
                                placeholder="Enter email" 
                                name="email" 
                                onChange={this.handleChange}
                                required 
                            />
                            <br />

                            <label><b>password</b></label>
                            <input 
                                type="password" 
                                placeholder="Enter password" 
                                name="password"
                                onChange={this.handleChange} 
                                required 
                            />

                            <button>Login</button>
                        </div>

                        <div className="container">
                            <button onClick={this.closeLoginForm} type="button" className="cancelbtn">Cancel</button>
                            <span className="psw">Forgot <a href="/">password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        students: state.students
    }
}

function mapDispatchToProps(dispatch){
    return{
        loginUser: (id) => dispatch({type: "LOGIN_USER", id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)