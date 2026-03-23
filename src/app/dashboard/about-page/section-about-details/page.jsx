"use client"

import React, { useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {

    /* 🔹 POINTS STATE */
    const [points, setPoints] = useState([
        { para: "" }
    ])

    /* 🔹 ADD POINT */
    const addPoint = () => {
        setPoints([...points, { para: "" }])
    }

    /* 🔹 DELETE POINT */
    const deletePoint = (index) => {
        const updatedPoints = points.filter((_, i) => i !== index)
        setPoints(updatedPoints)
    }

    /* 🔹 HANDLE CHANGE */
    const handlePointChange = (index, value) => {
        const updatedPoints = [...points]
        updatedPoints[index].para = value
        setPoints(updatedPoints)
    }

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages contact-detials">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit About Page</h2>

                    <form className="db-form" encType="multipart/form-data">

                        {/* about sec 1 */}
                        <h3 className="db-hd-mini mb-0 text-center">
                            About Section 1
                        </h3>

                        <label htmlFor="aboutSec1Para" className="db-hd-mini mt-4">
                            Para
                        </label>
                        <textarea
                            name="aboutSec1Para"
                            id="aboutSec1Para"
                            className="header-input"
                            placeholder="Enter text"
                        />

                        {/* <label htmlFor="aboutSec1Image" className="db-hd-mini mt-4">
                            Image
                        </label>
                        <input
                            type="file"
                            name="aboutSec1Image"
                            id="aboutSec1Image"
                            className="header-input"
                            accept="image/*"
                        /> */}
                        {/* about sec 1 */}


                        {/* about sec 2 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">
                            About Section 2
                        </h3>

                        <label htmlFor="aboutSec2Heading" className="db-hd-mini mt-4">
                            Heading
                        </label>
                        <input
                            type="text"
                            name="aboutSec2Heading"
                            id="aboutSec2Heading"
                            className="header-input"
                            placeholder="Heading goes here"
                        />

                        <label htmlFor="aboutSec2Para" className="db-hd-mini mt-4">
                            Para
                        </label>
                        <textarea
                            name="aboutSec2Para"
                            id="aboutSec2Para"
                            className="header-input"
                            placeholder="Enter Para"
                        />
                        {/* about sec 2 */}


                        {/* about sec 3 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">About Section 3</h3>
                        <label htmlFor="aboutSec3MiniHeading" className="db-hd-mini mt-4">Mini Heading</label>
                        <input type="text" name="aboutSec3MiniHeading" id="aboutSec3MiniHeading" className="header-input" placeholder="Heading Goes here ex:" />
                        <label htmlFor="aboutSec3Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="aboutSec3Heading" id="aboutSec3Heading" className="header-input" placeholder="Heading Goes here ex:" />
                        <label htmlFor="aboutSec3Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="aboutSec3Para" id="aboutSec3Para" className="header-input" placeholder="Enter text" />
                        <label htmlFor="aboutSec3Btn1" className="db-hd-mini mt-4">Button text</label>
                        <input type="text" name="aboutSec3Btn1" id="aboutSec3Btn1" className="header-input" placeholder="Enter text" />
                        {/* about sec 3 */}


                        {/* about sec 4 */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">
                            About Section 4
                        </h3>

                        <label htmlFor="aboutSec4BackImage" className="db-hd-mini mt-4">
                            Section 4 Background Image
                        </label>
                        <input
                            type="file"
                            name="aboutSec4BackImage"
                            id="aboutSec4BackImage"
                            className="header-input"
                            accept="image/*"
                        />

                        <label htmlFor="aboutSec4Heading" className="db-hd-mini mt-4">
                            Heading
                        </label>
                        <input
                            type="text"
                            name="aboutSec4Heading"
                            id="aboutSec4Heading"
                            className="header-input"
                        />

                        <label htmlFor="aboutSec4Para" className="db-hd-mini mt-4">
                            Para
                        </label>
                        <textarea
                            name="aboutSec4Para"
                            id="aboutSec4Para"
                            className="header-input"
                        />
                        {/* about sec 4 */}

                        {/* about sec 5 */}
                        <h3 className="db-hd-mini mt-5 mb-3 text-center">
                            About Section 5 Points
                        </h3>

                        {points.map((point, index) => (
                            <div key={index} className="mb-4">

                                <h4 className="db-hd-mini mt-4 text-center">
                                    Point {index + 1}
                                </h4>

                                <label className="db-hd-mini mt-2">
                                    Para
                                </label>

                                <textarea
                                    className="header-input"
                                    placeholder="Enter point text"
                                    value={point.para}
                                    onChange={(e) =>
                                        handlePointChange(index, e.target.value)
                                    }
                                />

                                {/* 🔁 ADD / DELETE LOGIC */}
                                {index === points.length - 1 ? (
                                    <button
                                        type="button"
                                        className="form-submit-btn update-btn mt-2"
                                        onClick={addPoint}
                                    >
                                        Add More
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="form-submit-btn back-btn-func mt-2"
                                        onClick={() => deletePoint(index)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        ))}
                        <label htmlFor="aboutSec5Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="aboutSec5Heading" id="aboutSec5Heading" className="header-input" placeholder="Heading Goes here ex:" />
                        <label htmlFor="aboutSec5Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="aboutSec5Para" id="aboutSec5Para" className="header-input" placeholder="Enter text" />
                        {/* about sec 5 */}


                        {/* about sec 6 */}
                        <h3 className="db-hd-mini mt-5 mb-3 text-center">
                            About Section 6
                        </h3>
                        <label htmlFor="aboutSec6Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="aboutSec6Heading" id="aboutSec6Heading" className="header-input" placeholder="Heading Goes here ex:" />
                        <label htmlFor="aboutSec6Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="aboutSec6Para" id="aboutSec6Para" className="header-input" placeholder="Enter text" />
                        {/* about sec 6 */}
                    </form>

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
