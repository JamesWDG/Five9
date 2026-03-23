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
    const [subheading, setsubHeading] = useState("")
    const [para, setpara] = useState("")
    const [btnText, setbtnText] = useState("")
    const [btnURL, setbtnURL] = useState("")





    const [headingValue, setHeadingValue] = useState("")
    const [subheadingValue, setSubHeadingValue] = useState("")
    const [paraValue, setparaValue] = useState("")
    const [btnTextValue, setbtnTextValue] = useState("")
    const [BtnURLValue, setBtnURLValue] = useState("")

    const fetchBuisnessSectionSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/security-page/Clearity_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log(data)
            setHeading(data.metas[0].meta_key)
            setsubHeading(data.metas[1].meta_key)
            setpara(data.metas[2].meta_key)
            setbtnText(data.metas[3].meta_key)
            setbtnURL(data.metas[4].meta_key)

            setHeadingValue(data.metas[0].meta_value)
            setSubHeadingValue(data.metas[1].meta_value)
            setparaValue(data.metas[2].meta_value)
            setbtnTextValue(data.metas[3].meta_value)
            setBtnURLValue(data.metas[4].meta_value)

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
            formData.append("sub_heading", subheadingValue)
            formData.append("para", paraValue)
            formData.append("button_text", btnTextValue)
            formData.append("button_url", BtnURLValue)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/security-page/Clearity_Section/${id}`,
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
                    <h2 className="db-hd">Edit {parentHeading} {heading} , {subheading} , {para} , {btnText} , {btnURL}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateBuisnessSectionSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} className="header-input file mb-5" onChange={(e) => setHeadingValue(e.target.value)} placeholder="Para Goes here" />



                        <label htmlFor="sub_heading" className="db-hd-mini">Edit {subheading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={subheadingValue} className="header-input file mb-5" onChange={(e) => setSubHeadingValue(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="para" className="db-hd-mini">Edit {para}</label>
                        <textarea type="text" name="para" id="para" defaultValue={paraValue} className="header-input file mb-5" onChange={(e) => setparaValue(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="button_text" className="db-hd-mini">Edit {btnText}</label>
                        <input type="text" name="button_text" id="button_text" defaultValue={btnTextValue} className="header-input file mb-5" onChange={(e) => setbtnTextValue(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="button_url" className="db-hd-mini">Edit {btnURL}</label>
                        <input type="text" name="button_url" id="button_url" defaultValue={BtnURLValue} className="header-input file" onChange={(e) => setBtnURLValue(e.target.value)} placeholder="Para Goes here" />


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

