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
    const [linkedin, setlinkedin] = useState("");
    const [linkedinValue, setlinkedinValue] = useState("");
    const [twitter, settwitter] = useState("");
    const [twitterValue, settwitterValue] = useState("");
    const [facebook, setfacebook] = useState("");
    const [facebookValue, setfacebookValue] = useState("");
    const [google, setgoogle] = useState("");
    const [googleValue, setgoogleValue] = useState("");
    const [instagram, setinstagram] = useState("");
    const [instagramValue, setinstagramValue] = useState("");

    const fetchContactTaglineSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Links_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setpageName(data?.page)
            setparentHeading(data.type)
            setheading(data?.metas[0]?.meta_key)
            setheadingValue(data?.metas[0]?.meta_value)
            setlinkedin(data?.metas[1]?.meta_key)
            setlinkedinValue(data?.metas[1]?.meta_value)
            settwitter(data?.metas[2]?.meta_key)
            settwitterValue(data?.metas[2]?.meta_value)
            setfacebook(data?.metas[3]?.meta_key)
            setfacebookValue(data?.metas[3]?.meta_value)
            setgoogle(data?.metas[4]?.meta_key)
            setgoogleValue(data?.metas[4]?.meta_value)
            setinstagram(data?.metas[5]?.meta_key)
            setinstagramValue(data?.metas[5]?.meta_value)
            console.log("data for home page  ====>>>", result);
        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
        finally {

        }
    }


    const updateContactTaglineSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Links_Section/${id}`,
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
        fetchContactTaglineSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {pageName} {parentHeading} {heading}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactTaglineSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">{heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
                        <label htmlFor="linkedin" className="db-hd-mini mt-5">{linkedin}</label>
                        <input type="url" name="linkedin" id="linkedin" defaultValue={linkedinValue} onChange={(e) => setlinkedinValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
                        <label htmlFor="twitter" className="db-hd-mini mt-5">{twitter}</label>
                        <input type="url" name="twitter" id="twitter" defaultValue={twitterValue} onChange={(e) => settwitterValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
                        <label htmlFor="facebook" className="db-hd-mini mt-5">{facebook}</label>
                        <input type="url" name="facebook" id="facebook" defaultValue={facebookValue} onChange={(e) => setfacebookValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
                        <label htmlFor="google" className="db-hd-mini mt-5">{google}</label>
                        <input type="url" name="google" id="google" defaultValue={googleValue} onChange={(e) => setgoogleValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
                        <label htmlFor="instagram" className="db-hd-mini mt-5">{instagram}</label>
                        <input type="url" name="instagram" id="instagram" defaultValue={instagramValue} onChange={(e) => setinstagramValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />
                       
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

{/* <label htmlFor="header-logo" className="db-hd-mini mt-5 mt-5">Edit Para</label>
                        <textarea type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Para Goes here" accept="image/*" required />
                        <label htmlFor="header-logo" className="db-hd-mini mt-5 mt-5">Edit Button Text</label>
                        <input type="text" name="header-logo" id="header-logo" className="header-input" placeholder="Enter Text" accept="image/*" required /> */}