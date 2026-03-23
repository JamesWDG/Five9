"use client"

import React, { useEffect, useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        setServices([
            {
                id: Date.now(),
                heading: "",
                para: "",
                buttonText: "",
                image: null
            }
        ])
    }, [])

    const addService = () => {
        setServices(prev => [
            ...prev,
            {
                id: Date.now() + Math.random(),
                heading: "",
                para: "",
                buttonText: "",
                image: null
            }
        ])
    }

    const removeService = (id) => {
        setServices(prev => prev.filter(item => item.id !== id))
    }

    const handleChange = (index, field, value) => {
        const updated = [...services]
        updated[index][field] = value
        setServices(updated)
    }

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages contact-detials">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Capabilities Page (All Capabilities)</h2>

                    <form className="db-form" encType="multipart/form-data">
                        <label className="db-hd-mini">Section Main Para</label>
                        <textarea
                            type="text"
                            className="header-input"
                            onChange={(e) =>
                                handleChange(index, "image", e.target.files[0])
                            }
                        />
                        {services.map((service, index) => {
                            const isLast = index === services.length - 1

                            return (
                                <div className="service-card" key={service.id}>

                                    <h3 className="db-hd-mini text-center mt-5">
                                        Capabilities box {index + 1}
                                    </h3>

                                    <label className="db-hd-mini mt-4">Image</label>
                                    <input
                                        type="file"
                                        className="header-input"
                                        onChange={(e) =>
                                            handleChange(index, "image", e.target.files[0])
                                        }
                                    />

                                    <label className="db-hd-mini mt-4">Heading</label>
                                    <input
                                        type="text"
                                        className="header-input"
                                        value={service.heading}
                                        placeholder="Enter Heading"
                                        onChange={(e) =>
                                            handleChange(index, "heading", e.target.value)
                                        }
                                    />

                                    <label className="db-hd-mini mt-4">Para</label>
                                    <textarea
                                        className="header-input"
                                        value={service.para}
                                        placeholder="Enter Para"
                                        onChange={(e) =>
                                            handleChange(index, "para", e.target.value)
                                        }
                                    />

                                    <label className="db-hd-mini mt-4">Button Text</label>
                                    <input
                                        type="text"
                                        className="header-input"
                                        value={service.buttonText}
                                        placeholder="Enter Button Text"
                                        onChange={(e) =>
                                            handleChange(index, "buttonText", e.target.value)
                                        }
                                    />

                                    {/* 🔘 ACTION BUTTON */}
                                    <div className="card-action-btns">
                                        {isLast ? (
                                            <button
                                                type="button"
                                                className="form-submit-btn mt-3"
                                                onClick={addService}
                                            >
                                                + Add More
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="form-submit-btn delete-btn mt-3"
                                                onClick={() => removeService(service.id)}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>

                                </div>
                            )
                        })}

                    </form>

                    {/* UPDATE + BACK (UNCHANGED) */}
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

                </div>
            </section>
        </>
    )
}

export default page
