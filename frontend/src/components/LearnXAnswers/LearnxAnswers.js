import React from "react"

import "./style.css"

class LearnxAnswers extends React.Component{
    replyAccordion = (event) =>{
        let replies = event.target.parentElement.parentElement.parentElement.lastChild
        let panel = event.target.parentElement.nextElementSibling

        if (panel.style.display === "block") {
            panel.style.display = "none"
            replies.style.display = "block"
        } else {
            panel.style.display = "block";
            replies.style.display = "none"
        }
    }
    accordion = (event) =>{
        console.log(event.target.nextElementSibling)
        let replies = event.target.nextElementSibling

        if (replies.style.display === "block") {
            replies.style.display = "none"
            event.target.style.display = "block"
        } else {
            replies.style.display = "block";
            event.target.style.display = "none"
        }
    }
    render(){
        return(
            <div className="main">
                <div className="QnA-main-container">
                    <h2>LearnX Answers</h2>
                    <header>great sort filter search</header>
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
                                                    <textarea name="reply-message" placeholder="type reply"/>
                                                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
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
                            <div className="reply-count">
                                <i onClick={this.accordion} className="fa fa-envelope replies-icon"> 4 replies</i>
                            </div>                                
                        </div>   
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
                                                    <textarea name="reply-message" placeholder="type reply"/>
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
                            <div className="reply-count">
                                <i onClick={this.accordion} className="fa fa-envelope replies-icon"> 4 replies</i>
                            </div>                                
                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
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