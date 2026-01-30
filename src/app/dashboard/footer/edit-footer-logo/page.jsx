"use client"

import React from "react"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Footer Logo & Para</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="footer-logo" className="db-hd-mini">Footer logo</label>
                        <input type="file" name="footer-logo" id="footer-logo" className="header-input mb-5" accept="image/*" required />

                        <label htmlFor="footer-logo" className="db-hd-mini">footer para</label>
                        <input type="text" name="footer-logo" id="footer-logo" className="header-input" placeholder="Enter text ex: Lorem ipsum dolor sit amet consectetur." accept="image/*" required />
                    </form>
                    <div className="btn-wrapper">
                        <button className="form-submit-btn update-btn" type="submit">Update</button>
                        <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default page
