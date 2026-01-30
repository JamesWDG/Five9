"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"
import { navigationData, navigationDataFooter } from "@/data/navigation"

const page = () => {
    const { id } = useParams()
    const router = useRouter()

    const [formData, setFormData] = useState({
        heading: "",
    })

    // 1️⃣ ID se object nikaalna
    useEffect(() => {
        const record = navigationDataFooter.find(
            (item) => item.id === Number(id)
        )

        if (record) {
            setFormData(record)
        }
    }, [id])

    // 2️⃣ Input change handle
    const handleChange = (e) => {
        setFormData({
            ...formData,
            heading: e.target.value,
        })
    }

    // 3️⃣ Submit par object banana
    const handleSubmit = (e) => {
        e.preventDefault()

        const finalObject = {
            id,
            heading: formData.heading,
        }

        console.log("SEND TO API 👉", finalObject)
    }

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Footer Navigation Link</h2>
                    <form onSubmit={handleSubmit} className="db-form">
                        <label className="db-hd-mini">Edit Link Name</label>
                        <input className="header-input" type="text" value={formData.heading} onChange={handleChange} required />
                    </form>
                    <div className="btn-wrapper">
                        <button type="submit" className="form-submit-btn">Update</button>
                        <button type="button" className="form-submit-btn" onClick={() => router.back()}>Back</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page