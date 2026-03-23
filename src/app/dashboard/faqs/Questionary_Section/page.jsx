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
    const [pageName, setpageName] = useState("")
    const [parentHeading, setparentHeading] = useState("");

    const [questionList, setquestionList] = useState([])

    const fetchContactBannerSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/faq-page/Questionary_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            console.log(data);

            setpageName(data?.page)
            setparentHeading(data.type)
            setquestionList(data?.questions_answers)

            // console.log("data for home page  ====>>>", result);
        } catch (error) {
            // console.log("Fetch error ===>>>", error)
        }
        finally {

        }
    }


    const updateContactBannerSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/faq-page/Questionary_Section/${id}`,
                {
                    method: "POST",
                    body: formData,
                })
            const result = await response.json()
            console.log("update result of headings======>>>>> :", result)
            if (!result.status) {
                // console.log("Validation errors:", result.errors)
            }
        } catch (error) {
            // console.log("Update error ===>>>", error)
        }
        finally {

        }
    }
    useEffect(() => {
        fetchContactBannerSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {pageName} {parentHeading} </h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactBannerSecData()
                    }}>
                        {Object.entries(questionList).map(([category, questions], i) => (

                            <div key={i}>

                                <label className="db-hd-mini mt-5">
                                    edit Heading {category}
                                </label>

                                <input
                                    type="text"
                                    name={`heading[${i}]`}
                                    value={category}
                                    className="header-input"
                                />

                                {questions.map((q, index) => (
                                    <div key={index}>

                                        <label className="db-hd-mini mt-5">
                                            edit Question {index + 1}
                                        </label>

                                        <input
                                            type="text"
                                            name={`question[${i}][${index}]`}
                                            value={q.question}
                                            className="header-input"
                                        />

                                        <label className="db-hd-mini mt-5">
                                            edit Answer {index + 1}
                                        </label>

                                        <TextEditor
                                            value={q.answer} name={`answer[${i}][${index}]`}
                                            onChange={(content) => setAnswerValue(content)}
                                        />

                                    </div>
                                ))}
                                <button className="form-submit-btn mt-5 add-question-btn" type="button"> Add More </button>
                            </div>
                        ))}

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