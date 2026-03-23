"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");

    // for mainnuse update purpose

    // const [videoFile, setvideoFile] = useState(null);
    const [marqueHeading1, setmarqueHeading1] = useState("");
    const [marqueHeading2, setmarqueHeading2] = useState("");
    const [marqueHeading3, setmarqueHeading3] = useState("");
    const [marqueSubHeading, setmarqueSubHeading] = useState("");
    const [para, setpara] = useState("");
    const [buttonText, setbuttonText] = useState("");
    const [buttonURL, setbuttonURL] = useState("");


    // for mainnuse update purpose
    // for headings only

    const [heading1, setHeading1] = useState("");
    const [heading2, setHeading2] = useState("");
    const [heading3, setHeading3] = useState("");
    const [subHeading, setsubHeading] = useState("");
    const [paraHeading, setparaHeading] = useState("");
    const [buttonHeading, setbuttonHeading] = useState("");
    const [buttonTextHeading, setbuttonTextHeading] = useState("");
    // const [buttonHeading, setvideoValue] = useState("");

    // for headings only

    const id = searchParams.get('id');

    const fetchMarqueSectionSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Marque_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log("data for home page  ====>>>", result);

            // for inner values

            setmarqueHeading1(data.metas[0].meta_value)
            setmarqueHeading2(data.metas[1].meta_value)
            setmarqueHeading3(data.metas[2].meta_value)
            setmarqueSubHeading(data.metas[3].meta_value)
            setpara(data.metas[4].meta_value)
            setbuttonText(data.metas[5].meta_value)
            setbuttonURL(data.metas[6].meta_value)

            // for inner values


            // for headings

            setHeading1(data.metas[0].meta_key)
            setHeading2(data.metas[1].meta_key)
            setHeading3(data.metas[2].meta_key)
            setsubHeading(data.metas[3].meta_key)
            setparaHeading(data.metas[4].meta_key)
            setbuttonHeading(data.metas[5].meta_key)
            setbuttonTextHeading(data.metas[6].meta_key)
            setparentHeading(data.type)

            // for headings

            console.log(data.metas[0].meta_value)
            console.log(data.metas[1].meta_value)
            console.log(data.metas[2].meta_value)
            console.log(data.metas[3].meta_value)
            console.log(data.metas[4].meta_value)
            console.log(data.metas[5].meta_value)
            console.log(data.metas[6].meta_value)
        } catch (error) {

        }
        finally {

        }
    }


    const updateMarqueSectionSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading_1", marqueHeading1)
            formData.append("heading_2", marqueHeading2)
            formData.append("heading_3", marqueHeading3)
            formData.append("sub_heading", marqueSubHeading)
            formData.append("para", para)
            formData.append("button_text", buttonText)
            formData.append("button_url", buttonURL)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Marque_Section/${id}`,
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
                    <h2 className="db-hd">Edit {parentHeading}  {heading1} , {heading2} , {heading3} , {subHeading} , {paraHeading} , {buttonHeading} & {buttonTextHeading} </h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateMarqueSectionSecData()
                    }}>
                        <label htmlFor="heading_1" className="db-hd-mini">Edit {heading1}</label>
                        <input type="text" name="heading_1" id="heading_1" defaultValue={marqueHeading1} className="header-input file" onChange={(e) => setvideoFile(e.target.files[0])} placeholder="Para Goes here" />



                        <label htmlFor="heading_2" className="db-hd-mini mt-5">Edit {heading2}</label>
                        <input type="text" name="heading_2" id="heading_2" defaultValue={marqueHeading2} onChange={(e) => setpara(e.target.value)} className="header-input" placeholder="Para Goes here" />




                        <label htmlFor="heading_3" className="db-hd-mini mt-5">Edit {heading3}</label>
                        <input type="text" name="heading_3" id="heading_3" defaultValue={marqueHeading3} onChange={(e) => setbuttonText(e.target.value)} className="header-input" placeholder="Enter Text" />




                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">Edit {subHeading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={marqueSubHeading} onChange={(e) => setbuttonText(e.target.value)} className="header-input" placeholder="Enter Text" />




                        <label htmlFor="para" className="db-hd-mini mt-5">Edit {paraHeading}</label>
                        <textarea name="para" id="para" defaultValue={para} onChange={(e) => setbuttonURL(e.target.value)} className="header-input" placeholder="Enter Text" />



                        <label htmlFor="button_text" className="db-hd-mini mt-5">Edit {buttonHeading}</label>
                        <input type="text" name="button_text" id="button_text" defaultValue={buttonText} onChange={(e) => setbuttonURL(e.target.value)} className="header-input" placeholder="Enter Text" />



                        <label htmlFor="button_url" className="db-hd-mini mt-5">Edit {buttonTextHeading}</label>
                        <input type="url" name="button_url" id="button_url" defaultValue={buttonURL} onChange={(e) => setbuttonURL(e.target.value)} className="header-input" placeholder="Enter Text" />




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

