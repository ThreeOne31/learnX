import React from "react"
import { Link } from "react-router-dom"

import "./style.css"
class Home extends React.Component{
    render(){
        return(
            <div className="main">
                {/*-------------Banner------------------*/}
                <div className="banner-img">
                    <div className="banner">
                        <h1 className="banner-title"><Link to="/">LearnX</Link></h1>
                        <p>"We Answer The Hard Questions"</p>
                    </div>
                </div>
                {/*-------------Business Points------------------*/}
                <div className="bussiness-points">
                    <section className="bussiness-point">
                        <div className="icon-point">
                            <i className="fa fa-pencil"></i>
                        </div>
                        <div className="point-text">
                            <h3>What we do</h3>
                            <p>
                                Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana
                            </p>
                        </div>
                    </section>
                    <section className="bussiness-point">
                        <div className="icon-point">
                            <i className="fa fa-wrench"></i>
                        </div>
                        <div className="point-text">
                            <h3>How we do it</h3>
                            <p>
                                Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana
                                Akha nxa fotseke banna ba likheleke, kea khonya, 
                            </p>
                        </div>
                    </section>
                    <section className="bussiness-point">
                        <div className="icon-point">
                            <i className="fa fa-paper-plane"></i>
                        </div>
                        <div className="point-text">
                            <h3>Join the Journey</h3>
                            <p>
                                Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana
                            </p>
                        </div>
                    </section>
                </div>
                {/*-------------Mission Statement------------------*/}
                <section className="wrapper">
                    <header className="mission-statement-container">
                        <h2 className="mission-statement-heading">Maybe a mission Statement here</h2>
                        <p className="misssion-statement">
                            Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana
                        </p>
                    </header>
                </section>
                {/*-------------Posts------------------*/}
                <div className="blog-post">
                    <div className="posts-container">
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>                            </div>
                            <div className="post-text">
                                <h3 className="post-title">Study Tips</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>
                            </div>
                            <div className="post-text">
                                <h3 className="post-title">A note on career choice</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>
                            </div>
                            <div className="post-text">
                                <h3 className="post-title">Life after High school</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>
                            </div>
                            <div className="post-text">
                                <h3 className="post-title">Post title</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>
                            </div>
                            <div className="post-text">
                                <h3 className="post-title">Post title</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                        <div className="post-card">
                            <div className="post-img-container">
                                <img src="/assets/images/react_image.jpg" alt="post"/>
                            </div>
                            <div className="post-text">
                                <h3 className="post-title">Post title</h3>
                                <h5>14 July 2016</h5>
                                <p className="post-snippet">Akha nxa fotseke banna ba likheleke, kea khonya, morena khalemela boo, lija bana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home