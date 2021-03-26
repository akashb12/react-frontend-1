import React from 'react'
import './Work.css';
import {Link} from 'react-router-dom'
function Work() {
    return (
        <>
        <section className='section-5'>
            <div className="container">
            <div className="mb-5">
                    <h1 className='text-center'>My Websites</h1>
                </div>
                <div className="row main-row">
                    {/* card 1 */}
                    <div className="col-md-4 sm-10 mb-5">
                        <div className="card p-3">
                            <img src="/assets/mart.png" alt="no image" className='card-img-top shadow bg-white rounded'/>
                            <div className="card-body">
                                <h6 className="card-title">Naksh Mart</h6>
                                <p className="card-text">Nakshmart is an ecommerce website built for helping local's to bring their businesses online</p>
                                <a className='btn btn-outline-dark' href='https://nakshmart.co.in/'>Visit</a>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col-md-4 sm-10 mb-5">
                        <div className="card p-3">
                            <img src="/assets/mart.png" alt="no image" className='card-img-top shadow bg-white rounded'/>
                            <div className="card-body">
                                <h6 className="card-title">Wrinkled pages</h6>
                                <p className="card-text">Wrinkledpages is built for students to buy/sell their books where buyer can chat with seller.</p>
                                <a className='btn btn-outline-dark' href='https://wrinkledpages.netlify.app/'>Visit</a>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="col-md-4 sm-10 mb-5">
                        <div className="card p-3">
                            <img src="/assets/mart.png" alt="no image" className='card-img-top shadow bg-white rounded'/>
                            <div className="card-body">
                                <h6 className="card-title">Chat Application</h6>
                                <p className="card-text">This is built for learning purpose where user can create room and chat with friends.</p>
                                <a className='btn btn-outline-dark' href='https://nostalgic-babbage-4814f1.netlify.app/'>Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Work
