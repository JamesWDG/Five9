"use client"

import React, { useState, useEffect } from "react"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {

    /* ===================== */
    /* 🔹 SERVICES BOX STATE */
    /* ===================== */
    const [serviceBoxes, setServiceBoxes] = useState([
        { heading: "", para: "", btnText: "", image: null }
    ])

    const addServiceBox = () => {
        setServiceBoxes([
            ...serviceBoxes,
            { heading: "", para: "", btnText: "", image: null }
        ])
    }

    const deleteServiceBox = (index) => {
        setServiceBoxes(serviceBoxes.filter((_, i) => i !== index))
    }

    const handleServiceChange = (index, field, value) => {
        const updated = [...serviceBoxes]
        updated[index][field] = value
        setServiceBoxes(updated)
    }

    /* ============================== */
    /* 🔹 OUR CAPABILITIES BOX STATE */
    /* ============================== */
    const [capabilityBoxes, setCapabilityBoxes] = useState([
        { heading: "", para: "", image: null }
    ])

    const addCapabilityBox = () => {
        setCapabilityBoxes([
            ...capabilityBoxes,
            { heading: "", para: "", image: null }
        ])
    }

    const deleteCapabilityBox = (index) => {
        setCapabilityBoxes(capabilityBoxes.filter((_, i) => i !== index))
    }

    const handleCapabilityChange = (index, field, value) => {
        const updated = [...capabilityBoxes]
        updated[index][field] = value
        setCapabilityBoxes(updated)
    }

    ////
    const [sliderBoxes, setSliderBoxes] = useState([
        { heading: "", para: "", image: null }
    ])

    const addSliderBox = () => {
        setSliderBoxes([
            ...sliderBoxes,
            { heading: "", para: "", image: null }
        ])
    }

    const deleteSliderBox = (index) => {
        setSliderBoxes(sliderBoxes.filter((_, i) => i !== index))
    }

    const handleSliderChange = (index, field, value) => {
        const updated = [...sliderBoxes]
        updated[index][field] = value
        setSliderBoxes(updated)
    }


    useEffect(() => {
        // backend ready
    }, [serviceBoxes, capabilityBoxes, sliderBoxes])

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages contact-detials">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Home Page</h2>

                    <form className="db-form" encType="multipart/form-data">

                        {/* ================= SECTION 1 ================= */}
                        <h3 className="db-hd-mini mb-0 text-center">Home Page Section 1</h3>
                        <label htmlFor='homePageSec1Para' className="db-hd-mini mt-4">Edit Para</label>
                        <textarea type="text" name="homePageSec1Para" id="homePageSec1Para" className="header-input" />
                        <label htmlFor="homePageSec1BtnText" className="db-hd-mini mt-4">Edit Button Text</label>
                        <input type="text" name="homePageSec1BtnText" id="homePageSec1BtnText" className="header-input" />

                        {/* ================= SECTION 2 ================= */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Home Page Section 2</h3>
                        <label htmlFor="homePageSec2MiniHeading" className="db-hd-mini mt-4">Edit Mini Heading</label>
                        <input type="homePageSec2MiniHeading" id="homePageSec2MiniHeading" className="header-input" />
                        <label htmlFor="homePageSec2Heading" className="db-hd-mini mt-4">Edit Heading</label>
                        <input type="text" name="homePageSec2Heading" id="homePageSec2Heading" className="header-input" />
                        <label htmlFor="homePageSec2Para" className="db-hd-mini mt-4">Edit Para</label>
                        <textarea type="text" name="homePageSec2Para" id="homePageSec2Para" className="header-input" />
                        <label htmlFor="homePageSec2BtnText" className="db-hd-mini mt-4">Edit Button Text</label>
                        <input type="text" name="homePageSec2BtnText" id="homePageSec2BtnText" className="header-input" />

                        {/* ================= SECTION 3 ================= */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">Home Page Section 3</h3>
                        <h3 className="db-hd-mini mt-5 mb-0">Box One Our Vision</h3>
                        <label htmlFor="homePageSec3VisionHeading" className="db-hd-mini mt-4">Edit Heading</label>
                        <input type="text" name="homePageSec3VisionHeading" id="homePageSec3VisionHeading" className="header-input" />
                        <label htmlFor="homePageSec3VisionPara" className="db-hd-mini mt-4">Edit Para</label>
                        <textarea type="text" name="homePageSec3VisionPara" id="homePageSec3VisionPara" className="header-input" />

                        <h3 className="db-hd-mini mt-5 mb-0">Box Two Our Mission</h3>
                        <label htmlFor="homePageSec3MissionHeading" className="db-hd-mini mt-4">Edit Heading</label>
                        <input type="text" name="homePageSec3MissionHeading" id="homePageSec3MissionHeading" className="header-input" />
                        <label htmlFor="homePageSec3MissionPara" className="db-hd-mini mt-4">Edit Para</label>
                        <textarea type="text" name="homePageSec3MissionPara" id="homePageSec3MissionPara" className="header-input" />

                        {/* ================= SECTION 4 ================= */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">
                            Home Page Section 4 (Our Services)
                        </h3>

                        <label htmlFor="homePageSec4MiniHeading" className="db-hd-mini mt-4">Edit Mini Heading</label>
                        <input type="text" name="homePageSec4MiniHeading" id="homePageSec4MiniHeading" className="header-input" />
                        <label htmlFor="homePageSec4Heading" className="db-hd-mini mt-4">Edit Heading</label>
                        <input type="text" name="homePageSec4Heading" id="homePageSec4Heading" className="header-input" />



                        <h3 className="db-hd-mini text-center mt-5">
                            Box 1 (Our Services)
                        </h3>
                        <label htmlFor="homePageSec4box1Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec4box1Heading" id="homePageSec4box1Heading" className="header-input" />
                        <label htmlFor="homePageSec4box1Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="homePageSec4box1Heading" id="homePageSec4box1Heading" className="header-input" />
                        <label htmlFor="homePageSec4box1BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec4box1BtnText" id="homePageSec4box1BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 2 (Our Services)
                        </h3>
                        <label htmlFor="homePageSec4box2Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec4box2Heading" id="homePageSec4box2Heading" className="header-input" />
                        <label htmlFor="homePageSec4box2Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="homePageSec4box2Heading" id="homePageSec4box2Heading" className="header-input" />
                        <label htmlFor="homePageSec4box2BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec4box2BtnText" id="homePageSec4box2BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 3 (Our Services)
                        </h3>
                        <label htmlFor="homePageSec4box3Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec4box3Heading" id="homePageSec4box3Heading" className="header-input" />
                        <label htmlFor="homePageSec4box3Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="homePageSec4box3Para" id="homePageSec4box3Para" className="header-input" />
                        <label htmlFor="homePageSec4box3BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec4box3BtnText" id="homePageSec4box3BtnText" className="header-input" />

                        {/* ================= SECTION 5 ================= */}
                        <h3 className="db-hd-mini mt-5 mb-3 text-center"> Home Page Section 5 (choose us) </h3>
                        <label htmlFor="homePageSec5MiniHeading" className="db-hd-mini mt-4">Mini Heading</label>
                        <input type="text" name="homePageSec5MiniHeading" id="homePageSec5MiniHeading" className="header-input" />
                        <label htmlFor="homePageSec5Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec5Heading" id="homePageSec5Heading" className="header-input" />
                        <label htmlFor="homePageSec5Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="homePageSec5Para" id="homePageSec5Para" className="header-input" />
                        <label htmlFor="homePageSec5BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec5BtnText" id="homePageSec5BtnText" className="header-input" />


                        {/* ================= SECTION 6 (DYNAMIC) ================= */}
                        <h3 className="db-hd-mini mt-5 mb-3 text-center">
                            Home Page Section 5 (Our Capabilities)
                        </h3>

                        <label htmlFor="homePageSec6Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Heading" id="homePageSec6Heading" className="header-input" />

                        <label htmlFor="homePageSec6Para" className="db-hd-mini mt-4">Para</label>
                        <textarea type="text" name="homePageSec6Heading" id="homePageSec6Heading" className="header-input" />

                        <h3 className="db-hd-mini text-center mt-5">
                            Box 1 (Our Capabilities)
                        </h3>
                        <label htmlFor="homePageSec6Box1Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Box1Heading" id="homePageSec6Box1Heading" className="header-input" />
                        <label htmlFor="homePageSec6Box1BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec6Box1BtnText" id="homePageSec6Box1BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 2 (Our Capabilities)
                        </h3>
                        <label htmlFor="homePageSec6Box2Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Box2Heading" id="homePageSec6Box2Heading" className="header-input" />
                        <label htmlFor="homePageSec6Box2BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec6Box2BtnText" id="homePageSec6Box2BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 3 (Our Capabilities)
                        </h3>
                        <label htmlFor="homePageSec6Box3Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Box3Heading" id="homePageSec6Box3Heading" className="header-input" />
                        <label htmlFor="homePageSec6Box3BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec6Box3BtnText" id="homePageSec6Box3BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 4 (Our Capabilities)
                        </h3>
                        <label htmlFor="homePageSec6Box4Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Box4Heading" id="homePageSec6Box4Heading" className="header-input" />
                        <label htmlFor="homePageSec6Box4BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec6Box4BtnText" id="homePageSec6Box4BtnText" className="header-input" />
                        <h3 className="db-hd-mini text-center mt-5">
                            Box 5 (Our Capabilities)
                        </h3>
                        <label htmlFor="homePageSec6Box5Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec6Box5Heading" id="homePageSec6Box5Heading" className="header-input" />
                        <label htmlFor="homePageSec6Box5BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input type="text" name="homePageSec6Box5BtnText" id="homePageSec6Box5BtnText" className="header-input" />

                        {/* ================= SECTION 7 ================= */}
                        <h3 className="db-hd-mini mt-5 mb-0 text-center">
                            Home Page Section 7 (Latest Insights)
                        </h3>
                        <label htmlFor="homePageSec7Heading" className="db-hd-mini mt-4">Heading</label>
                        <input type="text" name="homePageSec7Heading" id="homePageSec7Heading" className="header-input" />
                        <label htmlFor="homePageSec7BtnText" className="db-hd-mini mt-4">Button Text</label>
                        <input name="homePageSec7BtnText" id="homePageSec7BtnText" className="header-input" />


                        {sliderBoxes.map((box, index) => (
                            <div key={index} className="mt-5">

                                <h3 className="db-hd-mini text-center">
                                    Box {index + 1} (Latest Insights)
                                </h3>

                                <label htmlFor="homePagesec7Box1Image" className="db-hd-mini mt-4">Image</label>
                                <input
                                    type="file"
                                    name="homePagesec7Box1Image"
                                    id="homePagesec7Box1Image"
                                    className="header-input"
                                    accept="image/*"
                                    onChange={(e) =>
                                        handleSliderChange(index, "image", e.target.files[0])
                                    }
                                />

                                <label htmlFor="homePageSec7Box1Heading" className="db-hd-mini mt-4">Heading</label>
                                <input
                                    type="text"
                                    name="homePageSec7Box1Heading"
                                    id="homePageSec7Box1Heading"
                                    className="header-input"
                                    value={box.heading}
                                    onChange={(e) =>
                                        handleSliderChange(index, "heading", e.target.value)
                                    }
                                />

                                <label htmlFor="homePageSec7Box1Para1" className="db-hd-mini mt-4">Para 1</label>
                                <input
                                    type="text"
                                    name="homePageSec7Box1Para1"
                                    id="homePageSec7Box1Para1"
                                    className="header-input"
                                    value={box.para}
                                    onChange={(e) =>
                                        handleSliderChange(index, "para", e.target.value)
                                    }
                                />
                                <label htmlFor="homePageSec7Box1Para2" className="db-hd-mini mt-4">Para 2</label>
                                <textarea
                                    type="text"
                                    name="homePageSec7Box1Para2"
                                    id="homePageSec7Box1Para2"
                                    className="header-input"
                                    value={box.para}
                                    onChange={(e) =>
                                        handleSliderChange(index, "para", e.target.value)
                                    }
                                />
                                <label htmlFor="homePageSec7Box1BtnText" className="db-hd-mini mt-4">Edit Button Text</label>
                                <input
                                    type="text"
                                    name="homePageSec7Box1BtnText"
                                    id="homePageSec7Box1BtnText"
                                    className="header-input"
                                    value={box.para}
                                    onChange={(e) =>
                                        handleSliderChange(index, "para", e.target.value)
                                    }
                                />
                                <label htmlFor="homePageSec7Box1Url" className="db-hd-mini mt-4">Edit Button Url</label>
                                <input
                                    type="url"
                                    name="homePageSec7Box1Url"
                                    id="homePageSec7Box1Url"
                                    className="header-input"
                                    value={box.para}
                                    onChange={(e) =>
                                        handleSliderChange(index, "para", e.target.value)
                                    }
                                />

                                {index === sliderBoxes.length - 1 ? (
                                    <button
                                        type="button"
                                        className="form-submit-btn update-btn mt-3"
                                        onClick={addSliderBox}
                                    >
                                        Add More
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="form-submit-btn back-btn-func mt-3"
                                        onClick={() => deleteSliderBox(index)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        ))}
                    </form>

                    <div className="btn-wrapper">
                        <button className="form-submit-btn update-btn">Update</button>
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
