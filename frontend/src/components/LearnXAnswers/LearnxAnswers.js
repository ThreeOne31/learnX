import React from "react"

import "./style.css"

class LearnxAnswers extends React.Component{
    
    replyAccordion = (event) =>{
        
        let replies =event.target.parentElement.parentElement.lastChild

        if (replies.style.display === "block") {
            replies.style.display = "none"  
            event.target.parentElement.parentElement.parentElement.lastChild.style.display = "block"          
        } else {
            replies.style.display = "block";
            event.target.parentElement.parentElement.parentElement.lastChild.style.display = "none"
        }  
    }
    
    accordion = (event) =>{
        event.target.style.display = "none"
        let questionChildren = event.target.parentElement.children
        let replies = questionChildren[5].lastChild

        if (replies.style.display === "block") {
            replies.style.display = "none"            
        } else {
            replies.style.display = "block";
        }          
    }
    render(){
        return(
            <div className="main">
                <div className="QnA-main-container">
                    <h2>LearnX Answers</h2>
                    <div className="queation-header">
                        <button className="add-question">Add</button>
                        <select className="question-sort">
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>A &#8594; Z</option>
                            <option>Z &#8594; A</option>
                        </select>
                        <input className="question-search" type="text" name="search" placeholder="Search..." />                        
                    </div>
                    <div className="question-container">
                          
                        <div className="question">
                            <span className="time-right">11:00</span>
                            <img src="/assets/images/bandmember.jpg" alt="Avatar" />
                            <h3>UserName</h3>
                            <h4>Question title</h4>
                            <p>
                                Whenever I conteplate the blue colour I remember St Boniface, I say why me, why not mosuwe why not lehakoe la pelo eaka
                                Whenever I conteplate the blue colour I remember St Boniface, I say why me, why not mosuwe why not lehakoe la pelo eaka
                            </p>
                            <div className="question-footer">                                
                                <div>
                                    <button onClick={this.replyAccordion} className="question-buttons reply">Reply</button>
                                    <button className="question-buttons follow">follow</button> 
                                    <span className="question-tags">#physics  #circularMotion</span>
                                </div>
                                    <ul className="reply-n-replies">
                                        <li>
                                            <div className="reply-form-container">
                                                <img src="/assets/images/bandmember.jpg" alt="Avatar" />
                                                <form>
                                                    <input type="text" name="reply-message" placeholder="type reply"/>
                                                    <button className="send-reply">send</button>
                                                </form>                          
                                            </div>                                            
                                        </li>
                                        <li>
                                            <div className="reply-item">
                                                <span className="time-right">11:00</span>
                                                <img src="/assets/images/bandmember.jpg" alt="Avatar" />
                                                <h3>UserName</h3>
                                                <p className="reply-message">Hello. How are you today?</p>                            
                                            </div>
                                        </li>
                                    </ul>                
                            </div>                        
                            <i onClick={this.accordion} className="fa fa-envelope replies-icon"> 4 replies</i>                                                        
                        </div>                       
                    </div>
                </div>
            </div>
    )}
}
export default LearnxAnswers

/*
                <div className="container">
                    <img src="/assets/images/bandmember.jpg" alt="Avatar" />
                    <p>Hello. How are you today?</p>
                    <span className="time-right">11:00</span>
                </div>

                <div className="container darker">
                <img src="/assets/images/avatar_g2.jpg" alt="Avatar" className="right" />
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span className="time-left">11:01</span>
                </div>

                <div className="container">
                <img src="/assets/images/bandmember.jpg" alt="Avatar" />
                <p>Sweet! So, what do you wanna do today?</p>
                <span className="time-right">11:02</span>
                </div>

                <div className="container darker">
                <img src="/assets/images/avatar_g2.jpg" alt="Avatar"/>
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span className="time-left">11:05</span>
                </div>


*/