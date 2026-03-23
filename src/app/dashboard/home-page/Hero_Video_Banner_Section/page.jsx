"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");

    // for mainnuse update purpose

    const [videoFile, setvideoFile] = useState(null);
    const [para, setpara] = useState("");
    const [buttonText, setbuttonText] = useState("");
    const [buttonURL, setbuttonURL] = useState("");


    // for mainnuse update purpose
    // for headings only

    const [buttonURLHeading, setbuttonURLHeading] = useState("");
    const [buttonHeading, setbuttonHeading] = useState("");
    const [paraHeading, setparaHeading] = useState("");
    const [videoHeading, setvideoHeading] = useState("");
    const [videoValue, setvideoValue] = useState("");

    // for headings only

    const id = searchParams.get('id');
    const fetchVideoBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Hero_Video_Banner_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log("data for home page  ====>>>", result);
            setpara(data.metas[1].meta_value)
            setbuttonText(data.metas[2].meta_value)
            setbuttonURL(data.metas[3].meta_value)
            setbuttonHeading(data.metas[2].meta_key);
            setvideoValue(data.metas[0].meta_value);
            setbuttonURLHeading(data.metas[3].meta_key);
            setparaHeading(data.metas[1].meta_key);
            setvideoHeading(data.metas[0].meta_key);
            setparentHeading(data.type)
            console.log(data.metas[0].meta_value);
        } catch (error) {

        }
        finally {

        }
    }


    const updateVideoBannerSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("video", videoFile)
            formData.append("para", para)
            formData.append("button_text", buttonText)
            formData.append("button_url", buttonURL)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Hero_Video_Banner_Section/${id}`,
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
        fetchVideoBannerSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {videoHeading} ,{paraHeading} , {buttonHeading} & {buttonURLHeading} </h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateVideoBannerSecData()
                    }}>
                        <label htmlFor="header-logo" className="db-hd-mini">Edit {videoHeading}</label>
                        <input type="file" name="header-logo" id="header-logo" defaultValue={videoValue} className="header-input file" onChange={(e) => setvideoFile(e.target.files[0])} placeholder="Para Goes here" />



                        <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit {paraHeading}</label>
                        <textarea type="text" name="header-logo" id="header-logo" defaultValue={para} onChange={(e) => setpara(e.target.value)} className="header-input" placeholder="Para Goes here" />




                        <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit {buttonHeading}</label>
                        <input type="text" name="header-logo" id="header-logo" defaultValue={buttonText} onChange={(e) => setbuttonText(e.target.value)} className="header-input" placeholder="Enter Text" />




                        <label htmlFor="header-logo" className="db-hd-mini mt-5">Edit {buttonURLHeading}</label>
                        <input type="url" name="header-logo" id="header-logo" defaultValue={buttonURL} onChange={(e) => setbuttonURL(e.target.value)} className="header-input" placeholder="Enter Text" />




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

