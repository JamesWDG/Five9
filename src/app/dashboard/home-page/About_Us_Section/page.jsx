"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");

    // for main use update purpose

    const [abouttitle, setabouttitle] = useState("");
    const [aboutMainHeading, setaboutMainHeading] = useState("");
    const [aboutPara, setaboutPara] = useState("");
    const [aboutButtonText, setaboutButtonText] = useState("");
    const [aboutButtonURL, setaboutButtonURL] = useState("");


    // for main use update purpose


    // for headings only

    const [miniHeading, setminiHeading] = useState("");
    const [mainHeading, setmainHeading] = useState("");
    const [paraHeading, setparaHeading] = useState("");
    const [buttonTextHeading, setbuttonTextHeading] = useState("");
    const [buttonURLHeading, setbuttonURLHeading] = useState("");

    // for headings only

    const id = searchParams.get('id');

    const fetchAboutUsSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/About_Us_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log("data for home page  ====>>>", result);

            // for inner values

            setabouttitle(data.metas[0].meta_value)
            setaboutMainHeading(data.metas[1].meta_value)
            setaboutPara(data.metas[2].meta_value)
            setaboutButtonText(data.metas[3].meta_value)
            setaboutButtonURL(data.metas[4].meta_value)

            // for inner values


            // for headings

            setminiHeading(data.metas[0].meta_key)
            setmainHeading(data.metas[1].meta_key)
            setparaHeading(data.metas[2].meta_key)
            setbuttonTextHeading(data.metas[3].meta_key)
            setbuttonURLHeading(data.metas[4].meta_key)

            setparentHeading(data.type)

            // for headings

            console.log(data.metas[0].meta_value)
        } catch (error) {

        }
        finally {

        }
    }


    const updateAboutUsSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("title", abouttitle)
            formData.append("heading", aboutMainHeading)
            formData.append("para", aboutPara)
            formData.append("button_text", aboutButtonText)
            formData.append("button_url", aboutButtonURL)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/About_Us_Section/${id}`,
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
        fetchAboutUsSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {miniHeading} , {mainHeading} , {paraHeading} , {buttonTextHeading} , {buttonURLHeading} </h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateAboutUsSecData()
                    }}>
                        <label htmlFor="heading_1" className="db-hd-mini">Edit {miniHeading}</label>
                        <input type="text" name="heading_1" id="heading_1" defaultValue={abouttitle} className="header-input file" onChange={(e) => setabouttitle(e.target.value)} placeholder="Para Goes here" />



                        <label htmlFor="heading_2" className="db-hd-mini mt-5">Edit {mainHeading}</label>
                        <input type="text" name="heading_2" id="heading_2" defaultValue={aboutMainHeading} onChange={(e) => setaboutMainHeading(e.target.value)} className="header-input" placeholder="Para Goes here" />




                        <label htmlFor="heading_3" className="db-hd-mini mt-5">Edit {paraHeading}</label>
                        <textarea type="text" name="heading_3" id="heading_3" defaultValue={aboutPara} onChange={(e) => setaboutPara(e.target.value)} className="header-input" placeholder="Enter Text" />




                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">Edit {buttonTextHeading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={aboutButtonText} onChange={(e) => setaboutButtonText(e.target.value)} className="header-input" placeholder="Enter Text" />


                        <label htmlFor="button_url" className="db-hd-mini mt-5">Edit {buttonURLHeading}</label>
                        <input type="url" name="button_url" id="button_url" defaultValue={aboutButtonURL} onChange={(e) => setaboutButtonURL(e.target.value)} className="header-input" placeholder="Enter Text" />




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

