import React from "react"

import './style.css'

class Login extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className="imgcontainer">
                        <img src="assets/images/img_avatar4.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label><b>Username</b></label>
                        <input className="userName-input" type="text" placeholder="Enter Username" name="userName" required />
                        <br/>

                        <label><b>password</b></label>
                        <input className="password-input" type="password" placeholder="Enter password" name="userName" required />

                        <button className="loginbtn">Login</button>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login