"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const [parentHeading, setparentHeading] = useState("")
    const [newsLetterHeading1, setnewsLetterHeading1] = useState("")
    const [headingvalue, setheadingvalue] = useState("")

    const fetchNewsletterSecData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Newsletter_Section/${id}`
            )
            const result = await response.json()
            const data = result.data
            setparentHeading(data.type)
            console.log(data)
            setnewsLetterHeading1(data.metas[0].meta_key)
            setheadingvalue(data.metas[0].meta_value)
            // console.log("resuksandnasdn:", data.metas[0].meta_key)
        } catch (error) {
            console.log(error)
        }
    }

    const updateNewsletterSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingvalue)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Newsletter_Section/${id}`,
                {
                    method: "POST",
                    body: formData,
                }
            )

            const result = await response.json()
            console.log("Updated:", result)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) fetchNewsletterSecData()
    }, [id])

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading}'s {newsLetterHeading1}</h2>

                    <form
                        className="db-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            updateNewsletterSecData()
                        }}
                    >
                        <label className="db-hd-mini">Edit {newsLetterHeading1}</label>
                        <input
                            className="header-input"
                            name="heading"
                            defaultValue={headingvalue}
                            onChange={(e) => setheadingvalue(e.target.value)}
                        />

                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn">
                                Update
                            </button>
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
