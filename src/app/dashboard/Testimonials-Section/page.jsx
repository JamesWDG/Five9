"use client"

import DashboardHeader from '@/components/DashboardHeader'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const router = useRouter()
    const [parentHeading, setparentHeading] = useState("");
    // 🔹 Dynamic fields
    const [fields, setFields] = useState([{ heading: "" }])

    // 🔹 Fetch (optional)
    const fetchTestimonialSecData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/Testimonials_Section`, {
                method: "GET"
            })
            const result = await response.json()
            console.log("Fetched data ===>>>", result)
            const data = result.data;
        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
    }

    useEffect(() => {
        if (id) fetchTestimonialSecData()
    }, [id])

    // ➕ Add field
    const handleAddMore = () => {
        setFields([...fields, { heading: "" }])
    }
    // ➕ Add field

    // ✏ Change value
    const handleChange = (index, value) => {
        const updated = [...fields]
        updated[index].heading = value
        setFields(updated)
    }
    // ✏ Change value

    // ❌ Remove field
    const handleRemove = (index) => {
        if (fields.length === 1) return // at least 1 field rahe
        const updated = fields.filter((_, i) => i !== index)
        setFields(updated)
    }
    // ❌ Remove field

    // 🚀 Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Final data ===>>>", fields)

    }

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages">
                <div className="container-fluid">

                    <h2 className="db-hd">Edit Parent Heading</h2>

                    <form className="db-form" onSubmit={handleSubmit}>

                        {fields.map((field, index) => (
                            <div key={index} className="position-relative mb-4">

                                <label className="db-hd-mini">
                                    Edit Heading {index + 1}
                                </label>

                                <div className="d-flex gap-2 align-items-center">

                                    <input
                                        type="text"
                                        className="header-input file"
                                        placeholder="Para Goes here"
                                        value={field.heading}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                    />

                                    {/* ❌ Remove button */}
                                    {fields.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(index)}
                                            className="form-submit-btn back-btn-func"
                                            style={{ height: "45px" }}
                                        >
                                            ✕
                                        </button>
                                    )}

                                </div>
                            </div>
                        ))}

                        <div className="btn-wrapper">
                            <div className="gap-2 d-flex">

                                <button
                                    type="submit"
                                    className="form-submit-btn update-btn"
                                >
                                    Update
                                </button>

                                <button
                                    type="button"
                                    className="form-submit-btn update-btn"
                                    onClick={handleAddMore}
                                >
                                    Add more
                                </button>

                            </div>

                            <button
                                type="button"
                                className="form-submit-btn back-btn-func"
                                onClick={() => router.back()}
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

export default Page
