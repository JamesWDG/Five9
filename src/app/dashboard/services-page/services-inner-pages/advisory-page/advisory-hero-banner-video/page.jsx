"use client"
import DashboardHeader from '@/components/DashboardHeader'
import React from 'react'

const page = () => {
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Advisory Page Banner Background Video</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="header-logo" className="db-hd-mini">Enter Video URL</label>
                        <input type="text" name="header-logo" id="header-logo" className="header-input" placeholder='Enter Video URL' accept="image/*" required />
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
