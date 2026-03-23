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
    const [para1, setpara1] = useState("");
    const [para1Value, setpara1Value] = useState("");
    const [para2, setpara2] = useState("");
    const [para2Value, setpara2Value] = useState("");
    const [email, setemail] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [phone, setphone] = useState("");
    const [phoneValue, setphoneValue] = useState("");
    const [btnText, setBtnText] = useState("");
    const [BtnTextValue, setBtnTextValue] = useState("");
    const [BtnURL, setBtnURL] = useState("");
    const [BtnURLValue, setBtnURLValue] = useState("");
    const fetchContactBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/faq-page/Clarity_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setpageName(data?.page)
            setparentHeading(data.type)

            setheading(data?.metas[0]?.meta_key || "")
            setheadingValue(data?.metas[0]?.meta_value || "")
            setpara1(data?.metas[1]?.meta_key || "")
            setpara1Value(data?.metas[1]?.meta_value || "")
            setpara2(data?.metas[2]?.meta_key || "")
            setpara2Value(data?.metas[2]?.meta_value || "")
            setemail(data?.metas[3]?.meta_key || "")
            setemailValue(data?.metas[3]?.meta_value || "")
            setphone(data?.metas[4]?.meta_key || "")
            setphoneValue(data?.metas[4]?.meta_value || "")
            setBtnText(data?.metas[5]?.meta_key || "")
            setBtnTextValue(data?.metas[5]?.meta_value || "")
            setBtnURL(data?.metas[6]?.meta_key || "")
            setBtnURLValue(data?.metas[6]?.meta_value || "")
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
            formData.append("para_1", para1Value)
            formData.append("para_2", para2Value)
            formData.append("email", emailValue)
            formData.append("phone", phoneValue)
            formData.append("button_text", BtnTextValue)
            formData.append("button_url", BtnURLValue)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/faq-page/Clarity_Section/${id}`,
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
                    <h2 className="db-hd">Edit {pageName} {parentHeading} {heading} , {para1} , {para2} , {email} , {phone} , {btnText} , {BtnURL}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactBannerSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">edit {heading}</label>
                        <input type="text" name="heading" id="heading" value={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="para_1" className="db-hd-mini mt-5">edit {para1}</label>
                        <input type="text" name="para_1" id="para_1" value={para1Value} onChange={(e) => setpara1Value(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="para_2" className="db-hd-mini mt-5">edit {para2}</label>
                        <input type="text" name="para_2" id="para_2" value={para2Value} onChange={(e) => setpara2Value(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="email" className="db-hd-mini mt-5">edit {email}</label>
                        <input type="email" name="email" id="email" value={emailValue} onChange={(e) => setemailValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="phone" className="db-hd-mini mt-5">edit {phone}</label>
                        <input type="number" name="phone" id="phone" value={phoneValue} onChange={(e) => setphoneValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="button_text" className="db-hd-mini mt-5">edit {btnText}</label>
                        <input type="text" name="button_text" id="button_text" value={BtnTextValue} onChange={(e) => setBtnTextValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

                        <label htmlFor="button_url" className="db-hd-mini mt-5">edit {BtnURL}</label>
                        <input type="url" name="button_url" id="button_url" value={BtnURLValue} onChange={(e) => setBtnURLValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" />

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