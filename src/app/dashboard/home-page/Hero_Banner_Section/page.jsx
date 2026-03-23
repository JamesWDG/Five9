"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const [parentName, setparentName] = useState("");
    const [key1, setKey1] = useState("");
    const [heading1, setheading1] = useState("");
    const [heading2, setheading2] = useState("");
    const [value1, setValue1] = useState("");
    const [key2, setKey2] = useState("");
    const [value2, setValue2] = useState("");
    const searchParams = useSearchParams("id");
    const id = searchParams.get('id');
    const fetchHomeBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Hero_Banner_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            console.log("data for home page  ====>>>", result);

            setparentName(data.type)
            setheading1(data.metas[0].meta_key)
            setheading2(data.metas[1].meta_key)
            setKey1(data.metas[0].meta_key)
            setValue1(data.metas[0].meta_value)
            setKey2(data.metas[1].meta_key)
            setValue2(data.metas[1].meta_value)



            console.log(data.type);
            console.log(data.metas[0].meta_key);
            console.log(data.metas[0].meta_value);
            console.log(data.metas[1].meta_key);
            console.log(data.metas[1].meta_value);

        } catch (error) {

        }
        finally {

        }
    }


    const updateHomeBannerSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", key1)
            formData.append("sub_heading", key2)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Hero_Banner_Section/${id}`,
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
        fetchHomeBannerSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentName} Mini & Main Heading</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateHomeBannerSecData()
                    }}>
                        <label htmlFor="main_heading" className="db-hd-mini">{heading1}</label>
                        <input type="text" name={key1} id="main_heading" defaultValue={value1} onChange={(e) => setKey1(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">{heading2}</label>
                        <input type="text" name={key2} id="sub_heading" defaultValue={value2} onChange={(e) => setKey2(e.target.value)} className="header-input" placeholder="Main Heading Goes here" required />
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