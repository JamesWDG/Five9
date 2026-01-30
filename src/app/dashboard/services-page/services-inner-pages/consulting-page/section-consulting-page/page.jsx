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
                    <h2 className="db-hd">Edit Consulting Page (Solve Complex )</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="secMainPara" className="db-hd-mini">Edit Section Main Para</label>
                        <textarea type="text" name="secMainPara" id="secMainPara" className="header-input" placeholder="Heading goes here ex: Get in touch" />


                        {/* section 1 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Section 1</h3>
                        <label htmlFor="contactHeading1" className="db-hd-mini mt-4">Mini heading</label>
                        <input type="url" name="contactHeading1" id="contactHeading1" className="header-input" placeholder="Heading goes here ex: Talk to us We’ve been there" />
                        <label htmlFor="contactHeading1" className="db-hd-mini mt-4">heading</label>
                        <input type="url" name="contactHeading1" id="contactHeading1" className="header-input" placeholder="Heading goes here ex: Talk to us We’ve been there" />
                        <label htmlFor="contactPara1" className="db-hd-mini mt-4">para 1</label>
                        <textarea type="text" name="contactPara1" id="contactPara1" className="header-input" placeholder="Enter text" />
                        <label htmlFor="contactPara2" className="db-hd-mini mt-4">para 2</label>
                        <textarea type="text" name="contactPara2" id="contactPara2" className="header-input" placeholder="Enter text" />
                        <label htmlFor="contactPara2" className="db-hd-mini mt-4">Image</label>
                        <input type="file" name="contactPara2" id="contactPara2" className="header-input" placeholder="Enter text" />
                        {/* section 1 */}


                        {/* section 2 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Section 2</h3>
                        <label htmlFor="contactHeading2" className="db-hd-mini mt-4">Image</label>
                        <input type="file" name="contactHeading2" id="contactHeading2" className="header-input" placeholder="Heading goes here ex: Contact us" />
                        <label htmlFor="contactNumber" className="db-hd-mini mt-4">Para 1</label>
                        <textarea type="text" name="contactNumber" id="contactNumber" className="header-input" placeholder="Enter number" />
                        <label htmlFor="contactEmail" className="db-hd-mini mt-4">Para 2</label>
                        <textarea type="text" name="contactEmail" id="contactEmail" className="header-input" placeholder="Enter email" />
                        {/* section 2*/}
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