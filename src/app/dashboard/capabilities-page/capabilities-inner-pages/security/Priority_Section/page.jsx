"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import TextEditor from "@/components/TiptapEditor"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const id = searchParams.get('id');
    const [parentHeading, setParanetHeading] = useState("");
    const [heading1, setheading1] = useState("");
    const [heading2, setheading2] = useState("");
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const fetchAboutBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/security-page/Priority_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setParanetHeading(data.type);
            setheading1(data.metas[0].meta_key)
            setheading2(data.metas[1].meta_key)
            setvalue1(data.metas[0].meta_value)
            setvalue2(data.metas[1].meta_value)
            console.log("data for about page  ====>>>", result);

        } catch (error) {
            console.error("FETCH ERROR:", error);
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Oops!",
                text: "Cannot fetch About Banner Data.",
            });
        }
        finally {

        }
    }


    const updateAboutBannerSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", value1)
            formData.append("para", value2)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/security-page/Priority_Section/${id}`,
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
        fetchAboutBannerSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {heading1} , {heading2}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateAboutBannerSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">{heading1}</label>
                        <input type="text" name="heading" id="heading" defaultValue={value1} onChange={(e) => setvalue1(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="para" className="db-hd-mini mt-5">{heading2}</label>
                        <TextEditor
                            value={value2}
                            onChange={(content) => setvalue2(content)}
                        />
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