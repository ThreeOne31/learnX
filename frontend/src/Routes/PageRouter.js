import React from "react"
import { Route, Switch} from "react-router-dom"

import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Lectures from "../components/Lectures"
import Resources from "../components/Resources"

function PageRouter(){
    return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/courseCode/lectures" component={Lectures} />
                <Route path="/courseCode/resources" component={Resources} />
            </Switch>
    )
}

export default PageRouter