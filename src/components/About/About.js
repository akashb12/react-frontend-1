import React from 'react'
import './About.css'
function About() {
    return (
        <>
        <main>
            <section className='section-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/desk.png" alt="no image"/>
                        </div>
                        <div className="col-md-6 overwrite">
                            <div className="panel">
                            <h1>About Me</h1>
                            <p>Well, about me, I love full stack development: it’s kind of building amazing things just using a
              text editor.
              I have a pretty good knowledge of web technologies: HTTP servers, HTML, CSS, JavaScript frameworks (vuejs, reactjs, nodejs), php, flask but I’m more focused on React and Node. I have developed websites like ecommerce website, chatting website using MERN,socketio technology.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default About
