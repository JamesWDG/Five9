"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const Page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    const [parentHeading, setparentHeading] = useState("")
    const [logoHeading, setlogoHeading] = useState("")
    const [paraHeading, setparaHeading] = useState("")

    const [logovalue, setlogovalue] = useState(null)
    const [paraValue, setparaValue] = useState("")
    const [cardbox1Title, setcardbox1Title] = useState("")
    const [cardbox1Info1, setcardbox1Info1] = useState("")
    const [cardbox1Info2, setcardbox1Info2] = useState("")

    const [cardbox2Title, setcardbox2Title] = useState("")
    const [cardbox2Info1, setcardbox2Info1] = useState("")
    const [cardbox2Info2, setcardbox2Info2] = useState(null)

    const fetchFooterSecData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Section/${id}`
            )
            const result = await response.json()
            const data = result.data
            setparentHeading(data.type)
            console.log(data)
            setlogoHeading(data.metas[0].meta_key)
            setparaHeading(data.metas[1].meta_key)
            setcardbox1Title(data.cards[0].title)
            setcardbox1Info1(data.cards[0].info_1)
            setcardbox1Info2(data.cards[0].info_2)
            console.log(data.cards[1].info_2)
            setcardbox2Title(data.cards[1].title)
            setcardbox2Info1(data.cards[1].info_1)
            setcardbox2Info2(data.cards[1].info_2)
            setparaValue(data.metas[1].meta_value)

            // console.log("resuksandnasdn:", data.metas[0].meta_key)
        } catch (error) {
            console.log(error)
        }
    }

    const updateNewsletterSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("logo_img", logovalue)
            formData.append("para", paraValue)
            formData.append("title[]", cardbox1Title)
            formData.append("info_1[]", cardbox1Info1)
            formData.append("info_2[]", cardbox1Info2)
            formData.append("title[]", cardbox2Title)
            formData.append("info_1[]", cardbox2Info1)
            formData.append("info_2[]", cardbox2Info2)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Section/${id}`,
                {
                    method: "POST",
                    body: formData,
                }
            )

            const result = await response.json()
            console.log("Updated:", result)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) fetchFooterSecData()
    }, [id])

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {logoHeading} , {paraHeading} , Title 1 , Number , Mail , Title 2 , Address</h2>

                    <form
                        className="db-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            updateNewsletterSecData()
                        }}
                    >
                        <label className="db-hd-mini" label="logo_img">Edit {logoHeading}</label>
                        <input type="file" className="header-input mb-5" name="logo_img" onChange={(e) => setlogovalue(e.target.files[0])} />

                        <label className="db-hd-mini" label="para">Edit {paraHeading}</label>
                        <textarea className="header-input mb-5" name="para" defaultValue={paraValue} onChange={(e) => setparaValue(e.target.value)} />




                        <h3 className="db-hd-mini text-center mb-5">Edit box 1</h3>
                        <label className="db-hd-mini" label="title[]">Edit Title 1</label>
                        <input className="header-input mb-5" name="title[]" defaultValue={cardbox1Title} onChange={(e) => setcardbox1Title(e.target.value)} />

                        <label className="db-hd-mini" label="info_1[]">Edit Number</label>
                        <input className="header-input mb-5" name="info_1[]" defaultValue={cardbox1Info1} onChange={(e) => setcardbox1Info1(e.target.value)} />

                        <label className="db-hd-mini" label="info_2[]">Edit Mail</label>
                        <input className="header-input mb-5" name="info_2[]" defaultValue={cardbox1Info2} onChange={(e) => setcardbox1Info2(e.target.value)} />


                        <h3 className="db-hd-mini text-center mb-5">Edit box 2</h3>


                        <label className="db-hd-mini" label="title[]">Edit Title 2</label>
                        <input className="header-input mb-5" name="title[]" defaultValue={cardbox2Title} onChange={(e) => setcardbox2Title(e.target.value)} />

                        <label className="db-hd-mini" label="info_1[]">Edit Address</label>
                        <input className="header-input mb-5" name="info_1[]" defaultValue={cardbox2Info1} onChange={(e) => setcardbox2Info1(e.target.value)} />

                        <label className="db-hd-mini" label="info_2[]">Edit Address</label>
                        <input className="header-input" name="info_2[]" defaultValue={cardbox2Info2} onChange={(e) => setcardbox2Info2(e.target.value)} />

                        <div className="btn-wrapper">
                            <button className="form-submit-btn update-btn">Update</button>
                            <button type="submit" className="form-submit-btn back-btn-func" onClick={() => router.back()}>Back</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Page
