"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();
    console.log(id);
    const fetchNewsletterSecData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Navigation/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log(data);

        } catch (error) {

        }
    }
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Newsletter Section </h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="newsletterHeading" className="db-hd-mini">Enter name</label>
                        <input type="text" name="newsletterHeading" id="newsletterHeading" className="header-input mb-5" placeholder="Heading goes here ex: Contact Us Now to Get Started" />
                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">Update</button>
                            <button className="form-submit-btn back-btn-func" type="button" onClick={() => router.back()}>Back</button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default page
