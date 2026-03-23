"use client"

import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Swal from "sweetalert2"
import TextEditor from "@/components/TiptapEditor"

const Page = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const [pageName, setpageName] = useState("")
    const [parentHeading, setparentHeading] = useState("")
    const [heading, setheading] = useState("")
    const [headingValue, setheadingValue] = useState("")
    const [para, setpara] = useState("")
    const [paraValue, setparaValue] = useState("")

    const fetchContactClientSecData = async () => {
        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/Work_Togather_Section/${id}`
            )

            const result = await response.json()
            const data = result.data

            setpageName(data?.page)
            setparentHeading(data?.type)

            setheading(data?.metas[0]?.meta_key)
            setheadingValue(data?.metas[0]?.meta_value)

            setpara(data?.metas[1]?.meta_key)
            setparaValue(data?.metas[1]?.meta_value)

        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
    }

    const updateContactClientSecData = async () => {

        try {

            const formData = new FormData()

            formData.append("heading", headingValue)
            formData.append("para", paraValue)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/Work_Togather_Section/${id}`,
                {
                    method: "POST",
                    body: formData
                }
            )

            const result = await response.json()
            console.log("updated result ======>>>>> :", result)

            if (result.status) {
                Swal.fire({
                    icon: "success",
                    title: "Updated Successfully"
                })
            }

        } catch (error) {
            console.log("Update error ===>>>", error)
        }
    }

    useEffect(() => {

        if (id) {
            fetchContactClientSecData()
        }

    }, [id])

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages">
                <div className="container-fluid">

                    <h2 className="db-hd">
                        Edit {pageName} {parentHeading} {heading} , {para}
                    </h2>

                    <form
                        className="db-form"
                        encType="multipart/form-data"
                        onSubmit={(e) => {
                            e.preventDefault()
                            updateContactClientSecData()
                        }}
                    >

                        {/* Heading */}

                        <label className="db-hd-mini">{heading}</label>

                        <input
                            type="text"
                            name="heading"
                            value={headingValue}
                            onChange={(e) => setheadingValue(e.target.value)}
                            className="header-input"
                            placeholder="Mini Heading Goes here"
                            required
                        />

                        {/* Editor */}

                        <label className="db-hd-mini mt-5">{para}</label>

                        <TextEditor
                            value={paraValue}
                            onChange={(content) => setparaValue(content)}
                        />

                        <div className="btn-wrapper">

                            <button
                                className="form-submit-btn update-btn"
                                type="submit"
                            >
                                Update
                            </button>

                            <button
                                className="form-submit-btn back-btn-func"
                                type="button"
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