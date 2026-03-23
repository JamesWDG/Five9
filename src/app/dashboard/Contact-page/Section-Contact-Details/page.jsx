"use client"

import React from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages contact-detials">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Contact Page (Contact-Details)</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="secMainHeading" className="db-hd-mini">Edit Section Main Heading</label>
                        <input type="text" name="secMainHeading" id="secMainHeading" className="header-input" placeholder="Heading goes here ex: Get in touch" />


                        {/* INFO BOX 1 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Contact Info box 1</h3>
                        <label htmlFor="contactHeading1" className="db-hd-mini mt-4">heading</label>
                        <input type="url" name="contactHeading1" id="contactHeading1" className="header-input" placeholder="Heading goes here ex: Talk to us We’ve been there" />
                        <label htmlFor="contactPara1" className="db-hd-mini mt-4">para 1</label>
                        <textarea type="text" name="contactPara1" id="contactPara1" className="header-input" placeholder="Enter text" />
                        <label htmlFor="contactPara2" className="db-hd-mini mt-4">para 2</label>
                        <textarea type="text" name="contactPara2" id="contactPara2" className="header-input" placeholder="Enter text" />
                        {/* INFO BOX 1 */}


                        {/* INFO BOX 2 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Contact Info box 2</h3>
                        <label htmlFor="contactHeading2" className="db-hd-mini mt-4">heading</label>
                        <input type="text" name="contactHeading2" id="contactHeading2" className="header-input" placeholder="Heading goes here ex: Contact us" />
                        <label htmlFor="contactNumber" className="db-hd-mini mt-4">Contact Number</label>
                        <input type="number" name="contactNumber" id="contactNumber" className="header-input" placeholder="Enter number" />
                        <label htmlFor="contactEmail" className="db-hd-mini mt-4">Contact email</label>
                        <input type="email" name="contactEmail" id="contactEmail" className="header-input" placeholder="Enter email" />
                        <label htmlFor="contactAddress" className="db-hd-mini mt-4">Address</label>
                        <input type="text" name="contactAddress" id="contactAddress" className="header-input" placeholder="Enter address" />
                        {/* INFO BOX 2 */}


                        {/* INFO BOX 3 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Contact Info box 3</h3>
                        <label htmlFor="contactHeading3" className="db-hd-mini mt-4">heading</label>
                        <input type="text" name="contactHeading3" id="contactHeading3" className="header-input" placeholder="Heading Goes here ex: Already a client?" />
                        <label htmlFor="contactInfopara1" className="db-hd-mini mt-4">para</label>
                        <input type="text" name="contactInfopara1" id="contactInfopara1" className="header-input" placeholder="Enter text" />
                        <label htmlFor="contactInfoBoxBtn1" className="db-hd-mini mt-4">Button text</label>
                        <input type="text" name="contactInfoBoxBtn1" id="contactInfoBoxBtn1" className="header-input" placeholder="Enter text" />
                        {/* INFO BOX 3 */}


                        {/* CONTACT FORM AREA */}
                        {/* FORM BOX 1  */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Contact form</h3>
                        <label htmlFor="contactFormHeading1" className="db-hd-mini mt-4">heading 1</label>
                        <input type="text" name="contactFormHeading1" id="contactFormHeading1" className="header-input" placeholder="Heading Goes here ex: Already a client?" />
                        <label htmlFor="contactFormHeading2" className="db-hd-mini mt-4">heading 2</label>
                        <input type="text" name="contactFormHeading2" id="contactFormHeading2" className="header-input" placeholder="Heading Goes here ex: Already a client?" />
                        <label htmlFor="contactFormPara" className="db-hd-mini mt-4">para</label>
                        <input type="text" name="contactFormPara" id="contactFormPara" className="header-input" placeholder="Enter text" />

                        {/* SOCIAL LINKS AREA */}
                        <label htmlFor="LinkedinLink" className="db-hd-mini mt-4">Linkedin link</label>
                        <input type="url" name="LinkedinLink" id="LinkedinLink" className="header-input" placeholder="Enter link" />
                        <label htmlFor="twitterLink" className="db-hd-mini mt-4">twitter-x link</label>
                        <input type="url" name="twitterLink" id="twitterLink" className="header-input" placeholder="Enter link" />
                        <label htmlFor="fbLink" className="db-hd-mini mt-4">facebook link</label>
                        <input type="url" name="fbLink" id="fbLink" className="header-input" placeholder="Enter link" />
                        <label htmlFor="googleLink" className="db-hd-mini mt-4">google link</label>
                        <input type="url" name="googleLink" id="googleLink" className="header-input" placeholder="Enter link" />
                        <label htmlFor="instaLink" className="db-hd-mini mt-4">instagram link</label>
                        <input type="url" name="instaLink" id="instaLink" className="header-input" placeholder="Enter link" />
                        {/* SOCIAL LINKS AREA */}
                        {/* FORM BOX 1  */}


                        {/* CONTACT FORM AREA */}
                    </form>
                    <div className="btn-wrapper">
                        <button className="form-submit-btn update-btn" type="submit">Update</button>
                        <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page          