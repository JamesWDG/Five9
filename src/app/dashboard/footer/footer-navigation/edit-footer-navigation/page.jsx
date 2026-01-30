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
                    <h2 className="db-hd">Edit Header Navigation</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="footer-name" className="db-hd-mini">Edit Page Name</label>
                        <input type="text" name="footer-name" id="footer-name" className="header-input" placeholder="Enter Page Name" required />
                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">
                                Update
                            </button>
                            <button
                                className="form-submit-btn back-btn-func"
                                type="button"
                                onClick={() => window.history.back()}
                            >
                                Back
                            </button>

                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page
