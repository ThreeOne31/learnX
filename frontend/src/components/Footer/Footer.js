import React from "react"
import "./style.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <section className="footer-items">
                    <h3>Quick Links</h3>
                    <ul>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                    </ul>
                </section>
                <section className="footer-items">
                    <h3>Quick Links</h3>
                    <ul>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                        <li className="quick-link">Hello Word</li>
                    </ul>
                </section>
                <section className="footer-items">
                    <h3>Get in touch</h3>
                    <form>
                        <div className="form-container">
                            <div className="form-inputs" >
                                <input className="name-input" type="text" placeholder="name"/>                           
                                <input className="email-input" type="email" placeholder="email@mail.com"/>
                            </div>
                            <div className="message-input">
                                <textarea className="input-textarea" name="message" placeholder="message"></textarea>
                            </div>
                            <button className="send-msg-btn">send message</button>
                        </div>
                    </form>
                </section>
            </div>
        </footer>
    )
}

export default Footer