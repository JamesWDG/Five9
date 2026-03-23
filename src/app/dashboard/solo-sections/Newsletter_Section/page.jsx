"use client"
import DashboardHeader from '@/components/DashboardHeader';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
const page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    const router = useRouter();
    const [parentHeading, setparentHeading] = useState("");


    const [heading, setheading] = useState("");
    const [para, setpara] = useState("");
    const fetchNewsletterSecData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/Newsletter_Section/${id}`, {
                method: "GET",
                // headers: {
                // }
            })
            const result = await response.json();
            const data = result.data;
            console.log("data ya hay apna ===>>>", data);
            setparentHeading(data.type);
            setheading(data.metas[0].meta_key);
            setpara(data.metas[0].meta_value);
            console.log(data.type);

        } catch (error) {
        }
    }


    const updateNewsletterSecData = async () => {
        try {
            const formdata = new FormData();
            formdata.append("heading", para)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/Newsletter_Section/${id}`, {
                method: "POST",
                // headers: {
                // }
                body: formdata
            })
            const result = await response.json();
            const data = result.data;
            console.log("updated result ===>>>", data);


        } catch (error) {

        }
    }
    useEffect(() => {
        if (id) fetchNewsletterSecData();
    }, [id])
    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateNewsletterSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={para} className="header-input file" onChange={(e) => setpara(e.target.value)} placeholder="Para Goes here" />

                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn" type="submit">Update</button>
                            <button className="form-submit-btn back-btn-func" type="button" onClick={() => router.back()}>Back</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page
