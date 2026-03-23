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
    const [phone, setphone] = useState("");
    const [phoneValue, setphoneValue] = useState("");
    const [email, setemail] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [address, setaddress] = useState("");
    const [addressValue, setaddressValue] = useState("");

    const fetchContactUsSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Contact_Us_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setpageName(data?.page)
            setparentHeading(data.type)
            setheading(data?.metas[0]?.meta_key)
            setheadingValue(data?.metas[0]?.meta_value)
            setphone(data?.metas[1]?.meta_key)
            setphoneValue(data?.metas[1].meta_value)
            setemail(data?.metas[2]?.meta_key)
            setemailValue(data?.metas[2]?.meta_value)
            setaddress(data?.metas[3]?.meta_key)
            setaddressValue(data?.metas[3]?.meta_value)
            console.log("data for home page  ====>>>", result);
        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
        finally {

        }
    }


    const updateContactUsSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)
            formData.append("phone", phoneValue)
            formData.append("email", emailValue)
            formData.append("address", addressValue)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/Contact_Us_Section/${id}`,
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
        fetchContactUsSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {pageName} {parentHeading} {heading} , {phone} , {email} , {address}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactUsSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">{heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="phone" className="db-hd-mini mt-5">{phone}</label>
                        <input type="number" name="phone" id="phone" defaultValue={phoneValue} onChange={(e) => setphoneValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="email" className="db-hd-mini mt-5">{email}</label>
                        <input type="email" name="email" id="email" defaultValue={emailValue} onChange={(e) => setemailValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
                        <label htmlFor="address" className="db-hd-mini mt-5">{address}</label>
                        <input type="text" name="address" id="address" defaultValue={addressValue} onChange={(e) => setaddressValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
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