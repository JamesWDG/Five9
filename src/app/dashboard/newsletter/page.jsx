"use client"

import React from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Newsletter Section </h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="newsletterHeading" className="db-hd-mini">Enter newsletter heading</label>
                        <input type="text" name="newsletterHeading" id="newsletterHeading" className="header-input" placeholder="Heading goes here ex: Contact Us Now to Get Started" />

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
