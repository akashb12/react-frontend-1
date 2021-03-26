import React from 'react'
import { Carousel } from 'react-bootstrap'
function Experience() {
    return (
        <>
            <section className='section-4'>
                <div className="mb-5">
                    <h1 className='text-center'>Experience</h1>
                </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ab labore perspiciatis ullam et blanditiis eveniet ipsum voluptas accusantium? Adipisci.</p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src="/assets/letsapp.jpg" alt="" />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row justify-content-center">
                                <div className="col-sm-4">
                                    <div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ab labore perspiciatis ullam et blanditiis eveniet ipsum voluptas accusantium? Adipisci.</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <img src="/assets/letsapp.jpg" alt="" />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Experience
