"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const id = searchParams.get('id');
    const [parentHeading, setparentHeading] = useState("");
    const [heading, setHeading] = useState("")
    const [para, setpara] = useState("")
    const [headingValue, setHeadingValue] = useState("")
    const [paraValue, setparaValue] = useState("")

    const fetchBuisnessSectionSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/Expertise_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log(data)
            setHeading(data.metas[0].meta_key)
            setpara(data.metas[1].meta_key)

            setHeadingValue(data.metas[0].meta_value)
            setparaValue(data.metas[1].meta_value)

            setparentHeading(data.type)
            console.log("data for home page  ====>>>", data);
        } catch (error) {

        }
        finally {

        }
    }


    const updateBuisnessSectionSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)
            formData.append("para", paraValue)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/Expertise_Section/${id}`,
                {
                    method: "POST",
                    body: formData
                })
            const result = await response.json()
            console.log("update result of headings======>>>>> :", result)
            if (!result.status) {
                console.log("Validation errors:", result.errors)
            }
        } catch (error) {
            console.log("Update error ===>>>", error)
        }
        finally {

        }
    }
    useEffect(() => {
        fetchBuisnessSectionSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {heading} , {para}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateBuisnessSectionSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} className="header-input file mb-5" onChange={(e) => setHeadingValue(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="para" className="db-hd-mini">Edit {para}</label>
                        <textarea type="text" name="para" id="para" defaultValue={paraValue} className="header-input file mb-5" onChange={(e) => setparaValue(e.target.value)} placeholder="Para Goes here" />

                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">
                                Update
                            </button>
                            <button className="form-submit-btn back-btn-func" type="button" onClick={() => router.back()}>Back</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page

