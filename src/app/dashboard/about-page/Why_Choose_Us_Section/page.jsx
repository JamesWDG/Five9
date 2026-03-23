"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");
    const id = searchParams.get('id');

    console.log(id);

    const [heading, setHeading] = useState("");
    const [para, setpara] = useState("");

    const [whyheading, setwhyHeading] = useState("");
    const [whypara, setwhypara] = useState("");
    const fetchMarqueSectionSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/about-us-page/Why_Choose_Us_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log(data)
            setHeading(data.metas[0].meta_value)
            setpara(data.metas[1].meta_value)

            setparentHeading(data.type)
            setwhyHeading(data.metas[0].meta_key)
            setwhypara(data.metas[1].meta_key)
            console.log("data for home page  ====>>>", data);
        } catch (error) {

        }
        finally {

        }
    }


    const updateMarqueSectionSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", heading)
            formData.append("para", para)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/about-us-page/Why_Choose_Us_Section/${id}`,
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
        fetchMarqueSectionSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {whyheading} , {whypara}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateMarqueSectionSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {whyheading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={heading} className="header-input file mb-5" onChange={(e) => setHeading(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="para" className="db-hd-mini">Edit {whypara}</label>
                        <textarea type="text" name="para" id="para" defaultValue={para} className="header-input file" onChange={(e) => setpara(e.target.value)} placeholder="Para Goes here" />

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

