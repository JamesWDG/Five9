import React from 'react'

const Newsletter = () => {
    return (
        <>
            <section className="newsletter-sec">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <h2>Contact Us Now to Get Started</h2>
                        </div>
                        <div className="col-lg-5">
                            <form action="" className='newsletter-form'>
                                <div className="row justify-content-between">
                                    <div className="col-lg-6">
                                        <input type="text" name="" id="" placeholder='Name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" name="" id="" placeholder='Email' />
                                    </div>
                                </div>
                                <div className="row justify-content-between mt-4">
                                    <div className="col-lg-12">
                                        <div className='message-area'>
                                            <input type="text" name="" id="" placeholder='Message' />
                                            <button className='message-btn'><i className='fa-solid fa-arrow-right'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter
