import React from 'react'
import './Education.css'
function Education() {
    return (
        <>
            <section className='section-2'>
                <div className="cover">
                    <div className="content text-center ">
                        <h1>Education</h1>
                        <p>I have a Bachelor's degree in Engineering from Goa College Of Engineering and a Diploma
                        certificate from Goverment Polytechnic Panjim. Based upon these courses of study, I know that
                        these qualifications will undoubtedly help me be highly successful on the job.</p>
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <div className="box d-flex flex-md-row flex-wrap justify-content-center">
                        <div className="rect">
                            <h1>72%</h1>
                            <p>B.E, Electronics and Telecommunication</p>
                        </div>
                        <div className="rect">
                            <h1>76%</h1>
                            <p>Diploma, Electrical</p>
                        </div>
                        <div className="rect">
                            <h1>56%</h1>
                            <p>Senior Secondary, Science</p>
                        </div>
                        <div className="rect">
                            <h1>70%</h1>
                            <p>Secondary</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Education
