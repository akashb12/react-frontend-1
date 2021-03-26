import React from 'react'
import { Card } from 'react-bootstrap';
import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md'
import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaNodeJs, FaFire, FaPhp, FaAws } from 'react-icons/fa'
import { SiJavascript, SiNativescript, SiFlask, SiMongodb } from 'react-icons/si';
import './Skills.css'
function Skills() {
    return (
        <>
            <section className='section-3'>
                <div className="mb-5">
                    <h1 className='text-center'>Skills</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row skill-mobile-row">
                                {/* card 1 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaHtml5 size={100} />
                                        <Card.Body>
                                            <Card.Title>HTML</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 2 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaCss3Alt size={100} />
                                        <Card.Body>
                                            <Card.Title>CSS</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 3 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <SiJavascript size={100} />
                                        <Card.Body>
                                            <Card.Title>JS</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 4 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaReact size={100} />
                                        <Card.Body>
                                            <Card.Title>React.js</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 5 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <SiNativescript size={100} />
                                        <Card.Body>
                                            <Card.Title>React Native</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 6 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaVuejs size={100} />
                                        <Card.Body>
                                            <Card.Title>Vue.js/Nuxt.js</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 7 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaNodeJs size={100} />
                                        <Card.Body>
                                            <Card.Title>Node.js/Express.js</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 8 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaFire size={100} />
                                        <Card.Body>
                                            <Card.Title>Firebase</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 9 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <SiFlask size={100} />
                                        <Card.Body>
                                            <Card.Title>Flask(python)</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 10 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaPhp size={100} />
                                        <Card.Body>
                                            <Card.Title>Codeigniter(php</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 11 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <FaAws size={100} />
                                        <Card.Body>
                                            <Card.Title>AWS</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {/* card 12 */}
                                <div className="col-md-3 col-5 mt-3">
                                    <Card className='skill-card' >
                                        <SiMongodb size={100} />
                                        <Card.Body>
                                            <Card.Title>MongoDB</Card.Title>
                                            <Card.Text>
                                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
