import React from "react"

import "./style.css"

class Quiz extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="quiz-container">
                    <h1>General Knowledge: Quiz 1</h1>
                    <div className="question-container">
                        <h2>Question 1</h2>                        
                        <label class="choice-container">A) One
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 1" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">B) Two
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 1" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">C) Three
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 1" 
                            />
                            <span class="checkmark"></span>
                        </label>
                    </div> 
                    <div className="question-container">
                        <h2>Question 2</h2>                        
                        <label class="choice-container">A) One
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 2" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">B) Two juberish e siko feela, tlapa la thella ka raboshabane
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 2" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">C) Three
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 2" 
                            />
                            <span class="checkmark"></span>
                        </label>
                    </div>               
                    <div className="question-container">
                        <h2>Question 3</h2>                        
                        <label class="choice-container">A) One
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 3" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">B) Two
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 3" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">C) Three
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 3" 
                            />
                            <span class="checkmark"></span>
                        </label>
                    </div>               
                    <div className="question-container">
                        <h2>Question 4</h2>                        
                        <label class="choice-container">A) One
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 4" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">B) Two
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 4" 
                            />
                            <span class="checkmark"></span>
                        </label>
                        <label class="choice-container">C) Three
                            <input 
                                type="radio" 
                                checked="checked" 
                                name="question 4" 
                            />
                            <span class="checkmark"></span>
                        </label>
                    </div>                                  
                </div>
            </div>
        )
    }
}

export default Quiz