"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Swal from "sweetalert2"
import TextEditor from "@/components/TiptapEditor"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const id = searchParams.get('id');
    const [parentHeading, setParanetHeading] = useState("");
    const [heading, setheading] = useState("");
    const [headingValue, setheadingValue] = useState("");
    const [para, setpara] = useState("");
    const [paraValue, setparaValue] = useState("");
    const [email, setemail] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [phone, setphone] = useState("");
    const [phoneValue, setphoneValue] = useState("");
    const [address, setaddress] = useState("");
    const [addressValue, setaddressValue] = useState("");

    const fetchAboutBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/terms-condition-page/Contact_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setParanetHeading(data.type);
            setheading(data?.metas[0]?.meta_key);
            setheadingValue(data?.metas[0]?.meta_value);
            setpara(data?.metas[1]?.meta_key);
            setparaValue(data?.metas[1]?.meta_value);
            setemail(data?.metas[2]?.meta_key);
            setemailValue(data?.metas[2]?.meta_value);
            setphone(data?.metas[3]?.meta_key);
            setphoneValue(data?.metas[3]?.meta_value);
            setaddress(data?.metas[4]?.meta_key);
            setaddressValue(data?.metas[4]?.meta_value);
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
            formData.append("heading", headingValue)
            formData.append("para", paraValue)
            formData.append("email", emailValue)
            formData.append("phone", phoneValue)
            formData.append("address", addressValue)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/terms-condition-page/Contact_Section/${id}`,
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
                    <h2 className="db-hd">Edit {parentHeading} {heading} , {para} , {email} , {phone} , {address}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateAboutBannerSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {heading}</label>
                        <input type="text" name="heading" id="heading" value={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Enter heading" />

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit {para}</label>
                        <textarea type="text" name="para" id="para" value={paraValue} onChange={(e) => setparaValue(e.target.value)} className="header-input" placeholder="Enter Para" />

                        <label htmlFor="email" className="db-hd-mini mt-5">Edit {email}</label>
                        <input type="email" name="email" id="email" value={emailValue} onChange={(e) => setemailValue(e.target.value)} className="header-input" placeholder="Enter Email" />

                        <label htmlFor="phone" className="db-hd-mini mt-5">Edit {phone}</label>
                        <input type="number" name="phone" id="phone" value={phoneValue} onChange={(e) => setphoneValue(e.target.value)} className="header-input" placeholder="Enter Phone Number" />

                        <label htmlFor="address" className="db-hd-mini mt-5">Edit {address}</label>
                        <textarea type="text" name="address" id="address" value={addressValue} onChange={(e) => setaddressValue(e.target.value)} className="header-input" placeholder="Enter Address" />

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