"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Swal from "sweetalert2"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const id = searchParams.get('id');
    const [pageName, setpageName] = useState("")
    const [parentHeading, setparentHeading] = useState("");
    const [heading, setheading] = useState("");
    const [headingValue, setheadingValue] = useState("");
    const [subheading, setsubheading] = useState("");
    const [subheadingValue, setsubheadingValue] = useState("");

    const fetchContactBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Banner_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setpageName(data?.page)
            setparentHeading(data.type)
            setheading(data?.metas[0]?.meta_key)
            setheadingValue(data?.metas[0]?.meta_value)
            setsubheading(data?.metas[1]?.meta_key)
            setsubheadingValue(data?.metas[1]?.meta_value)
            console.log("data for home page  ====>>>", result);
        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
        finally {

        }
    }


    const updateContactBannerSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)
            formData.append("sub_heading", subheadingValue)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Banner_Section/${id}`,
                {
                    method: "POST",
                    body: formData,
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
        fetchContactBannerSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {pageName} {parentHeading} {heading} , {subheading}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactBannerSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">{heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">{subheading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={subheadingValue} onChange={(e) => setsubheadingValue(e.target.value)} className="header-input" placeholder="Main Heading Goes here" required />
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

{/* <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit Para</label>
                        <textarea type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Para Goes here" accept="image/*" required />
                        <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit Button Text</label>
                        <input type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Enter Text" accept="image/*" required /> */}