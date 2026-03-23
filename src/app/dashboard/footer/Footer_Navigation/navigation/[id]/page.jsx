"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {
    const { id } = useParams()
    const router = useRouter();
    const [heading, setHeading] = useState("")
    const [title1, settitle1] = useState("")
    const [title2, settitle2] = useState("")
    const [urlValue, seturlValue] = useState("")
    console.log(id);
    const fetchFooterNavigationData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Navigation/navigation/${id}`, {
                method: "GET",
            })
            const result = await response.json()
            const data = result.data;
            const cmsMeta = data.cms_meta_values[0]
            console.log("result isssss===>>", result);
            setHeading(data.meta_value)
            seturlValue(data.cms_meta_values[0].value)
            settitle1(data.meta_key)
            settitle2(data.cms_meta_values[0].key)
            console.log(data.meta_value);

        } catch (error) {

        }
    }

    const handleUpdateMetaValues = async () => {
        try {
            // const token = Cookies.get("token")

            const formData = new FormData()
            formData.append("navigation", heading)
            formData.append("url", urlValue)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Navigation/update-navigation/${id}`,
                {
                    method: "POST",
                    // headers: {
                    //     Authorization: `Bearer ${token}`,
                    // },
                    body: formData,
                }
            )

            const result = await response.json()
            console.log("Update result:", result)

            if (!result.status) {
                console.log("Validation errors:", result.errors)
            }
        } catch (error) {
            console.log("Update error ===>>>", error)
        }
    }


    useEffect(() => {
        if (id) fetchFooterNavigationData();
    }, [id])

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Footer Navigation Link {title1} , {title2}</h2>
                    <form className="db-form" onSubmit={(e) => {
                        e.preventDefault()
                        handleUpdateMetaValues()
                    }}>
                        <label className="db-hd-mini">Edit {title1} name</label>
                        <input type="text" name="navigation" className="header-input" value={heading} onChange={(e) => setHeading(e.target.value)} />

                        <label className="db-hd-mini mt-5">Edit {title2} URL</label>
                        <input type="url" name="url" className="header-input" defaultValue={urlValue} onChange={(e) => seturlValue(e.target.value)} />

                        <div className="btn-wrapper">
                            <button type="submit" className="form-submit-btn update-btn">Update</button>
                            <button type="button" className="form-submit-btn back-btn-func" onClick={() => router.back()}>Back</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page