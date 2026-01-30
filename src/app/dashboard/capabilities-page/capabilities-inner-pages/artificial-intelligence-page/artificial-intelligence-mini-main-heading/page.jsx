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
                    <h2 className="db-hd">Edit Artificial Intelligence Page Mini & Main Heading</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="header-logo" className="db-hd-mini">Edit mini heading</label>
                        <input type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Mini Heading Goes here" accept="image/*" required />
                        <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit main heading</label>
                        <input type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Main Heading Goes here" accept="image/*" required />
                    </form>
                    <div className="btn-wrapper">
                        <button className="form-submit-btn update-btn" type="submit">
                            Update
                        </button>
                        <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
