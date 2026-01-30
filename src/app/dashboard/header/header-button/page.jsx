"use client"
import DashboardHeader from '@/components/DashboardHeader'
import React from 'react'

const page = () => {
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Header Navigation</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="header-name" className="db-hd-mini">Edit button text</label>
                        <input type="text" name="header-name" id="header-name" className="header-input" placeholder="Enter button text" required />
                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">Update</button>
                            {/* <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button> */}
                        </div>
                        <label htmlFor="header-name" className="db-hd-mini mt-5">Edit button URL</label>
                        <input type="text" name="header-name" id="header-name" className="header-input" placeholder="Enter button URL" required />
                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">Update</button>
                            <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
                        </div>
                    </form>
                </div >
            </section >
        </>
    )
}

export default page
