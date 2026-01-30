import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="login-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="login-box">
                                <h2>FORGET PASSWORD</h2>

                                <form id="loginForm">
                                    <div className="input-group">
                                        <label htmlFor="">Email</label>
                                        <input type="email" placeholder="Email" required />
                                        <span className="input-icon"><i className="fa-solid fa-envelope" style={{ color: "#1C0011" }}></i></span>
                                    </div>

                                    {/* <div className="forgot-password">
                                        <Link href={"/Auth/reset-password"}>Forgot your password ?</Link>
                                    </div> */}

                                    <button type="submit" className="login-btn">Forget password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
