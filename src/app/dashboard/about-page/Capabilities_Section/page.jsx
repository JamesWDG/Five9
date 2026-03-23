"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");
    const id = searchParams.get('id');


    const [subheading, setsubHeading] = useState("");
    const [subheadingValue, setsubHeadingValue] = useState("");
    const [para, setpara] = useState("");
    const [paraValue, setparaValue] = useState("");
    const fetchMarqueSectionSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/about-us-page/Capabilities_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log(data)

            setsubHeading(data.metas[0].meta_key)
            setpara(data.metas[1].meta_key) 
            setsubHeadingValue(data.metas[0].meta_value)
            setparaValue(data.metas[1].meta_value)

            setparentHeading(data.type)
            console.log("data for home page  ====>>>", data);
        } catch (error) {

        }
        finally {

        }
    }


    const updateMarqueSectionSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("sub_heading", subheading)
            formData.append("para", para)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/about-us-page/Capabilities_Section/${id}`,
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
                    <h2 className="db-hd">Edit {parentHeading} {subheading} , {para}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateMarqueSectionSecData()
                    }}>

                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">Edit {subheading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={subheadingValue} onChange={(e) => setsubHeading(e.target.value)} className="header-input" placeholder="Enter Text" />



                        <label htmlFor="para" className="db-hd-mini mt-5">Edit {para}</label>
                        <textarea type="text" name="para" id="para" defaultValue={paraValue} onChange={(e) => setpara(e.target.value)} className="header-input" placeholder="Enter Text" />

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

