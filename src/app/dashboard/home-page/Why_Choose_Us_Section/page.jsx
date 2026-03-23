"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams("id");
    const [parentHeading, setparentHeading] = useState("");
    // for main headings(left wrapper)

    const [chooseheading, setchooseheading] = useState("");
    const [choosesubheading, setchoosesubheading] = useState("");
    const [choosepara, setchoosepara] = useState("");
    const [choosebtnText, setchoosebtnText] = useState("");
    const [choosebtnURL, setchoosebtnURL] = useState("");

    // for main headings(left wrapper)

    // for main headings(left wrapper)

    const [boxHeading1, setboxHeading1] = useState("");
    const [boxtextHeading1, setboxtextHeading1] = useState("");
    const [boxHeading2, setboxHeading2] = useState("");
    const [boxtextHeading2, setboxtextHeading2] = useState("");
    const [boxHeading3, setboxHeading3] = useState("");
    const [boxtextHeading3, setboxtextHeading3] = useState("");
    const [boxHeading4, setboxHeading4] = useState("");
    const [boxtextHeading4, setboxtextHeading4] = useState("");

    // for main headings(left wrapper)


    // for mainnuse update purpose

    const [heading, setheading] = useState("");
    const [subheading, setsubheading] = useState("");
    const [para, setpara] = useState("");
    const [buttonText, setbuttonText] = useState("");
    const [buttonURL, setbuttonURL] = useState("");

    // for mainnuse update purpose

    // for box images update purpose

    const [boxImage1, setboxImage1] = useState(null);
    const [boxImage2, setboxImage2] = useState(null);
    const [boxImage3, setboxImage3] = useState(null);
    const [boxImage4, setboxImage4] = useState(null);

    // for mainnuse update purpose


    const id = searchParams.get('id');
    const fetchWhyChooseSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Why_Choose_Us_Section/${id}`, {
                method: "GET",
            })
            const result = await response.json();
            const data = result.data;
            console.log("data for home page  ====>>>", result);

            // fetching parent heading
            setparentHeading(data.type)
            // fetching parent heading


            // fetching left wrapper heading
            setchooseheading(data.metas[0].meta_key)
            setchoosesubheading(data.metas[1].meta_key)
            setchoosepara(data.metas[2].meta_key)
            setchoosebtnText(data.metas[3].meta_key)
            setchoosebtnURL(data.metas[4].meta_key)
            // fetching left wrapper heading

            // fetching box (cards) heading
            setboxHeading1(data.cards[0].box_heading)
            setboxtextHeading1(data.cards[0].box_text)
            setboxHeading2(data.cards[1].box_heading)
            setboxtextHeading2(data.cards[1].box_text)
            setboxHeading3(data.cards[2].box_heading)
            setboxtextHeading3(data.cards[2].box_text)
            setboxHeading4(data.cards[3].box_heading)
            setboxtextHeading4(data.cards[3].box_text)
            // fetching box (cards) heading


            // fetching inner values 
            setheading(data.metas[0].meta_value)
            setsubheading(data.metas[1].meta_value)
            setpara(data.metas[2].meta_value)
            setbuttonText(data.metas[3].meta_value)
            setbuttonURL(data.metas[4].meta_value)
            // fetching inner values 



            console.log(data.metas[0].meta_value);
        } catch (error) {

        }
        finally {

        }
    }


    const updateWhyChooseSecData = async () => {
        try {
            const formData = new FormData()

            // images (ONLY if selected)
            if (boxImage1) formData.append("box_image[0]", boxImage1)
            if (boxImage2) formData.append("box_image[1]", boxImage2)
            if (boxImage3) formData.append("box_image[2]", boxImage3)
            if (boxImage4) formData.append("box_image[3]", boxImage4)

            // headings
            formData.append("box_heading[0]", boxHeading1)
            formData.append("box_heading[1]", boxHeading2)
            formData.append("box_heading[2]", boxHeading3)
            formData.append("box_heading[3]", boxHeading4)

            // texts
            formData.append("box_text[0]", boxtextHeading1)
            formData.append("box_text[1]", boxtextHeading2)
            formData.append("box_text[2]", boxtextHeading3)
            formData.append("box_text[3]", boxtextHeading4)

            // left section
            formData.append("heading", heading)
            formData.append("sub_heading", subheading)
            formData.append("para", para)
            formData.append("button_text", buttonText)
            formData.append("button_url", buttonURL)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/home-page/Why_Choose_Us_Section/${id}`,
                {
                    method: "POST",
                    body: formData,
                }
            )

            const result = await response.json()
            console.log("update result:", result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchWhyChooseSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {parentHeading} {chooseheading} , {choosesubheading} , {choosepara} , {choosebtnText} , {choosebtnURL} & Cards</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateWhyChooseSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">Edit {chooseheading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={heading} className="header-input file" onChange={(e) => setheading(e.target.value)} placeholder="Para Goes here" />

                        <label htmlFor="sub_heading" className="db-hd-mini mt-5">Edit {choosesubheading}</label>
                        <input type="text" name="sub_heading" id="sub_heading" defaultValue={subheading} onChange={(e) => setsubheading(e.target.value)} className="header-input" placeholder="Para Goes here" />

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit {choosepara}</label>
                        <textarea type="text" name="para" id="para" defaultValue={para} onChange={(e) => setpara(e.target.value)} className="header-input" placeholder="Para Goes here" />

                        <label htmlFor="button_text" className="db-hd-mini mt-5">Edit {choosebtnText}</label>
                        <input type="text" name="button_text" id="button_text" defaultValue={buttonText} onChange={(e) => setbuttonText(e.target.value)} className="header-input" placeholder="Enter Text" />

                        <label htmlFor="button_url" className="db-hd-mini mt-5">Edit {choosebtnURL}</label>
                        <input type="url" name="button_url" id="button_url" defaultValue={buttonURL} onChange={(e) => setbuttonURL(e.target.value)} className="header-input" placeholder="Enter Text" />









                        <h3 className="db-hd-mini text-center mt-5 mb-5">Edit Cards Section</h3>

                        <h3 className="db-hd-mini mt-4 mb-3 text-center">Card1</h3>

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Box Image</label>
                        <input type="file" name="para" id="header-logo" onChange={(e) => setboxImage1(e.target.files[0])} className="header-input" />

                        <label htmlFor="heading" className="db-hd-mini mt-5">Edit Card Heading</label>
                        <input type="text" name="heading" id="header-logo" defaultValue={boxHeading1} className="header-input file" onChange={(e) => setboxHeading1(e.target.value)} placeholder="Para Goes here" />

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Card Sub Heading</label>
                        <textarea type="text" name="para" id="header-logo" defaultValue={boxtextHeading1} onChange={(e) => setboxtextHeading1(e.target.value)} className="header-input" placeholder="Para Goes here" />










                        <h3 className="db-hd-mini mt-4 mb-3 text-center">Card2</h3>

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Box Image</label>
                        <input type="file" name="para" id="header-logo" onChange={(e) => setboxImage2(e.target.files[1])} className="header-input" />

                        <label htmlFor="heading" className="db-hd-mini mt-5">Edit Card Heading</label>
                        <input type="text" name="heading" id="header-logo" defaultValue={boxHeading2} className="header-input file" onChange={(e) => setboxHeading2(e.target.value)} placeholder="Para Goes here" />

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Card Sub Heading</label>
                        <textarea type="text" name="para" id="header-logo" defaultValue={boxtextHeading2} onChange={(e) => setboxtextHeading2(e.target.value)} className="header-input" placeholder="Para Goes here" />









                        <h3 className="db-hd-mini mt-4 mb-3 text-center">Card3</h3>

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Box Image</label>
                        <input type="file" name="para" id="header-logo" onChange={(e) => setboxImage3(e.target.files[2])} className="header-input" />

                        <label htmlFor="heading" className="db-hd-mini mt-5">Edit Card Heading</label>
                        <input type="text" name="heading" id="header-logo" defaultValue={boxHeading3} className="header-input file" onChange={(e) => setboxHeading3(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Card Sub Heading</label>
                        <textarea type="text" name="para" id="header-logo" defaultValue={boxtextHeading3} onChange={(e) => setboxtextHeading3(e.target.value)} className="header-input" placeholder="Para Goes here" />












                        <h3 className="db-hd-mini mt-4 mb-3 text-center">Card4</h3>

                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Box Image</label>
                        <input type="file" name="para" id="header-logo" onChange={(e) => setboxImage4(e.target.files[3])} className="header-input" />

                        <label htmlFor="heading" className="db-hd-mini mt-5">Edit Card Heading</label>
                        <input type="text" name="heading" id="header-logo" defaultValue={boxHeading4} className="header-input file" onChange={(e) => setboxHeading4(e.target.value)} placeholder="Para Goes here" />


                        <label htmlFor="para" className="db-hd-mini mt-5">Edit Card Sub Heading</label>
                        <textarea type="text" name="para" id="header-logo" defaultValue={boxtextHeading4} onChange={(e) => setboxtextHeading4(e.target.value)} className="header-input" placeholder="Para Goes here" />










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

