"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const [parentHeading, setparentHeading] = useState("")
    const [missiontitle1, setmissiontitle1] = useState("")
    const [missiontitle2, setmissiontitle2] = useState("")
    const [missionpara1, setmissionpara1] = useState("")
    const [missionpara2, setmissionpara2] = useState("")

    const fetchMissionSecData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Mission_Section/${id}`
            )
            const result = await response.json()
            const data = result.data

            setmissiontitle1(data.cards[0].title)
            setmissionpara1(data.cards[0].para)
            setmissiontitle2(data.cards[1].title)
            setmissionpara2(data.cards[1].para)
            setparentHeading(data.type)
        } catch (error) {
            console.log(error)
        }
    }

    const updateMissionSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("title[]", missiontitle1)
            formData.append("para[]", missionpara1)
            formData.append("title[]", missiontitle2)
            formData.append("para[]", missionpara2)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Mission_Section/${id}`,
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
        if (id) fetchMissionSecData()
    }, [id])

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading}</h2>

                    <form
                        className="db-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            updateMissionSecData()
                        }}
                    >
                        <label className="db-hd-mini">Edit Heading 1</label>
                        <input
                            className="header-input"
                            name="title[]"
                            value={missiontitle1}
                            onChange={(e) => setmissiontitle1(e.target.value)}
                        />

                        <label className="db-hd-mini mt-5">Edit Para 1</label>
                        <textarea
                            name="para[]"
                            className="header-input"
                            value={missionpara1}
                            onChange={(e) => setmissionpara1(e.target.value)}
                        />

                        <label className="db-hd-mini mt-5">Edit Heading 2</label>
                        <input
                            name="title[]"
                            className="header-input"
                            value={missiontitle2}
                            onChange={(e) => setmissiontitle2(e.target.value)}
                        />

                        <label className="db-hd-mini mt-5">Edit Para 2</label>
                        <textarea
                            name="para[]"
                            className="header-input"
                            value={missionpara2}
                            onChange={(e) => setmissionpara2(e.target.value)}
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
