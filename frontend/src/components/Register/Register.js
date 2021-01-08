import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import "./style.css"

class Register extends React.Component{
    state = {
        email: "",
        password: "",
        repeatPassword: ""
    }
    handlechange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.password === this.state.repeatPassword){
            this.props.registerUser(this.state)
            this.setState({
                email: "",
                password: "",
                repeatPassword: ""
            })
            this.props.history.push("/")

        }
        else{
            alert("passwords dont macth")
        }

    }
    render(){
        return(
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label><b>Email</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handlechange} 
                            required 
                        />

                        <label ><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            value={this.state.password} 
                            onChange={this.handlechange}
                            required
                        />

                        <label ><b>Repeat Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Repeat Password" 
                            name="repeatPassword" 
                            value={this.state.repeatPassword}
                            onChange={this.handlechange}
                            required 
                        />
                        <hr />
                        <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>

                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                    
                    <div className="container signin">
                        <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                    </div>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        registerUser: (student) => dispatch({type: "REGESTER_USER", student: student})
    }
}
export default connect(null, mapDispatchToProps)(Register)