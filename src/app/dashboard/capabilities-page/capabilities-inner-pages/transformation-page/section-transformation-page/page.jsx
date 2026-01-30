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
                    <h2 className="db-hd">Edit Transformation Page (Bridge Strategy)</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="transformationMainPara" className="db-hd-mini">Edit Section Main Para</label>
                        <textarea type="text" name="transformationsecMainPara" id="transformationMainPara" className="header-input" placeholder="Heading goes here ex: Get in touch" />


                        {/* section 1 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Section 1</h3>
                        <label htmlFor="transformationMiniHeading" className="db-hd-mini mt-4">Mini heading</label>
                        <input type="url" name="transformationMiniHeading" id="transformationMiniHeading" className="header-input" placeholder="Heading goes here ex: Talk to us We’ve been there" />
                        <label htmlFor="transformationHeading" className="db-hd-mini mt-4">heading</label>
                        <input type="url" name="transformationHeading" id="transformationHeading" className="header-input" placeholder="Heading goes here ex: Talk to us We’ve been there" />
                        <label htmlFor="transformationPara1" className="db-hd-mini mt-4">para 1</label>
                        <textarea type="text" name="transformationPara1" id="transformationPara1" className="header-input" placeholder="Enter text" />
                        <label htmlFor="transformationPara2" className="db-hd-mini mt-4">para 2</label>
                        <textarea type="text" name="transformationPara2" id="transformationPara2" className="header-input" placeholder="Enter text" />
                        <label htmlFor="transformationVideo" className="db-hd-mini mt-4">Video</label>
                        <input
                            type="file"
                            name="transformationVideo"
                            id="transformationVideo"
                            className="header-input"
                            accept="video/*"
                        />
                        <label htmlFor="transformationPara3" className="db-hd-mini mt-4">para 3</label>
                        <textarea type="text" name="transformationPara3" id="transformationPara3" className="header-input" placeholder="Enter text" />
                        {/* section 1 */}


                       
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