"use client"

import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Cookies from "js-cookie"
const page = () => {
    const searchParams = useSearchParams();
    const [logo, setLogo] = useState(null);

    const updateLogo = async () => {
        try {
            const id = searchParams.get('id');
            const token = Cookies.get("token");
            const formData = new FormData();
            formData.append("logo", logo);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/update-logo/${id}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {

        }
    }
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Header Logo</h2>
                    <form action="" className="db-form" encType="multipart/form-data">
                        <label htmlFor="header-logo" className="db-hd-mini">edit logo</label>
                        <input onChange={e => {
                            console.log(e.target.files[0]);
                            setLogo(e.target.files[0])
                        }} type="file" name="header-logo" id="header-logo" className="header-input" accept="image/*" required />

                    </form>
                    <div className="btn-wrapper">
                        <button onClick={updateLogo} className="form-submit-btn update-btn" type="submit">Update</button>
                        <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
