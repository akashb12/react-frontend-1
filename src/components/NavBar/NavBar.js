import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader, FaAlignRight } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'
function NavBar() {
  return (
    <>
      <header className="container-fluid">
        <div className="container-fluid">
          <Navbar expand="lg">
            <Navbar.Brand href="/"><FaBookReader /> Resume</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className='nav-links' to='/about'>About</Link>
                <Link className='nav-links' to='/skills'>Skills</Link>
                <Link className='nav-links' to='/education'>Education</Link>
                <Link className='nav-links' to='/interests'>Work</Link>
                <Link className='nav-links' to='/interests'>Experience</Link>
                <Link className='nav-links' to='/interests'>Achievements</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-7 col-12">
              <h6>Hi,</h6>
              <h1>I,am <span style={{color:'#e2ff1e'}}> Akash Banaulikar</span> Fullstack Developer</h1>
                    {/* <p>Well, about me, I love full stack development: it’s kind of building amazing things just using a
              text editor.
              I have a pretty good knowledge of web technologies: HTTP servers, HTML, CSS, JavaScript frameworks (vuejs, reactjs, nodejs), php, flask but I’m more focused on React and Node. I have developed websites like ecommerce website, chatting website using MERN,socketio technology.
                    </p> */}
            </div>
            <div className="col-md-5 col-12 h-25">
              <img className='animated' src="/assets/undraw_dev_productivity_umsq.svg" alt="no image" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar
