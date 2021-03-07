import React from "react"

import "./style.css"
import { connect } from "react-redux"

import avatar_g2 from "./images/avatar_g2.jpg"
import bandmember from "./images/bandmember.jpg"

class LearnxAnswers extends React.Component{
    state ={
        replyMessage: "",
        courseTag: "",
        courseSubTag: "",
        questionMessage: "",
        questionTitle: ""
    }

    handleVoting = (event) =>{
        const votingButton = event.target.getAttribute("button-name")
        const replyId = event.currentTarget.parentNode.parentNode.parentNode.getAttribute("reply-id")
        const questionId = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("question-id")
        if(votingButton === "vote-up"){
            this.props.replyVote(questionId, replyId, 'ADD')
        }else{
            this.props.replyVote(questionId, replyId, 'SUBTRACT')
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleReplySubmission = (event) => {
        event.preventDefault()
        const questionId = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("question-id")
        this.props.addReply(this.state.replyMessage, questionId)
        this.setState({
            replyMessage: ""
        })
    }
    handleQuestionSubmission = (event) => {
        event.preventDefault()
        const question = {
            title: this.state.questionTitle,
            text: this.state.questionMessage,
            courseTag: this.state.courseTag,
            courseSubTag: this.state.courseSubTag,            
        }

        this.props.addQuestion(question)
        this.setState({
            questionTitle: "",
            courseTag: "",
            courseSubTag: "",
            questionMessage: ""
        })
        this.closeOverlayForm()
    }
    
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
        let questionChildren = event.target.parentElement.parentElement.children
        let replies = questionChildren[5].lastChild

        if (replies.style.display === "block") {
            replies.style.display = "none"            
        } else {
            replies.style.display = "block";
        }        
    }

    openOverlayForm = () =>{
        document.querySelector(".add-question-overlay").classList.add("open")
    }
    closeOverlayForm = () =>{
        document.querySelector(".add-question-overlay").classList.remove("open")
    }

    render(){
       
        const questions = this.props.questions? (
            this.props.questions.map(question =>{
                const repliesCount = question.replies.length? <i onClick={this.accordion} className="fa fa-envelope replies-icon">  {question.replies.length} replies</i> :<div></div>
                const replies = question.replies.map(reply =>                             
                    <li reply-id={reply.id} key={reply.id}>
                        <div className="reply-item">                            
                            <div className="reply-msg-container">
                                <img src={avatar_g2} alt="Avatar" />
                                <div className="reply-text-msg">                                    <h3>{reply.author}</h3>
                                    <p className="reply-message">{reply.message}</p>
                                </div>   
                            </div> 
                            <div className="votes-container">
                                <span className="time-right">{reply.date}</span>
                                <button onClick={this.handleVoting} button-name="vote-up" className="reply-vote-up">+</button>
                                <p>{reply.votes}</p>
                                <button  onClick={this.handleVoting} button-name="vote-down" className="reply-vote-down">-</button>
                            </div>                           
                        </div>
                    </li>   
                )
                
                return(
                    <div className="question" question-id={question.id} key={question.id}>
                        <span className="time-right">{question.date}</span>
                        <img src={bandmember} alt="Avatar" />
                        <h3>{question.author}</h3>
                        <h4>{question.title}</h4>
                        <p>
                            {question.message}
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
                                            <img src={avatar_g2} alt="Avatar" />
                                            <form onSubmit={this.handleReplySubmission}>
                                                <input 
                                                    onChange={this.handleChange} 
                                                    className="reply-input-message" 
                                                    type="text" name="replyMessage" 
                                                    placeholder="type reply"
                                                    value={this.state.replyMessage}
                                                />
                                                <button className="send-reply">send</button>
                                            </form>                       
                                        </div>                                            
                                    </li>                                       
                                    {replies}                                                                             
                                </ul>                
                        </div>                        
                    <div>{repliesCount}</div>                                                       
                    </div> 
                )
            })
        ):(
            <div>
                <h2>Feel like challenging us? Leave a question, lets see what you got?</h2>
            </div>
        )
        return(
            <div className="main">
                {/***********************************************************************************************************/}
                {/*                                               QUESTION CONT                                             */}
                {/***********************************************************************************************************/}
                <div className="QnA-main-container">
                    <h2>LearnX Answers</h2>
                     
                    <div className="queation-header">
                        <button className="add-question" onClick={this.openOverlayForm}>Add</button>
                        <select className="question-sort">
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>A &#8594; Z</option>
                            <option>Z &#8594; A</option>
                        </select>
                        <input className="question-search" type="text" name="search" placeholder="Search..." />                        
                    </div>
                    <div className="qtn-container"> 
                        {questions}                                                                                        
                    </div>
                </div>

                {/***********************************************************************************************************/}
                {/*                                                FORM OVERLAY                                             */}
                {/***********************************************************************************************************/}
                <div className="add-question-overlay">
                    <form onSubmit={this.handleQuestionSubmission} className="form-content">
                        
                        <div className="tags-container">
                            <label><b>Tags:</b></label>
                            <select value={this.state.courseTag} className="tag-selection" name="courseTag" onChange={this.handleChange}>
                                <option value="Maths">Maths</option>
                                <option value="Sesotho">Sesotho </option>
                                <option value="Phusics">Physics</option>
                                <option value="English">English</option>
                            </select>
                            <select value={this.state.courseSubTag} className="tag-selection" name="courseSubTag" onChange={this.handleChange}>
                                <option value="Trignometry">Trignometry</option>
                                <option value="Shapes">Shapes </option>
                                <option value="Leaner Programming">Learner Programming</option>
                                <option value="Geometry">Geometry</option>
                            </select>
                            <br />
                            <label><b>Title</b></label>
                            <input 
                                className="password-input" 
                                type="text"
                                placeholder="Question title" 
                                name="questionTitle"
                                onChange={this.handleChange} 
                                value={this.state.questionTitle}
                                required 
                            />

                            <label><b>Question</b></label>
                            <textarea 
                                className="password-input" 
                                placeholder="Start typying your question" 
                                name="questionMessage"
                                onChange={this.handleChange} 
                                value={this.state.questionMessage}
                                required 
                            />
                        <div className="question-form-footer">
                            <button className="addQbtn">Submit</button>
                            <button onClick={this.closeOverlayForm} type="button" className="cancelbtn">Cancel</button>                            
                        </div>
                        </div>                        
                    </form>
                </div>
        
            </div>
        
        )
    }
}
function mapStateToProps(state){
    return{
        students: state.students,
        questions: state.questions
    }
}
function mapDispatchToProps(dispatch){
    return{
        addQuestion: (question) => dispatch({type: 'ADD_QUESTION', question: question}),
        addReply: (reply, questionId) => dispatch({type: 'ADD_REPLY', payload: {reply: reply, questionId: questionId}}),
        replyVote: (questionId, replyId, voteType) => dispatch({type: 'REPLY_VOTE', payload:{ questionId: questionId, replyId: replyId, voteType: voteType}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LearnxAnswers)