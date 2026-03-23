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



    const [question1, setQuestion1] = useState("");
    const [Answer1, setAnswer1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [Answer2, setAnswer2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [Answer3, setAnswer3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [Answer4, setAnswer4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [Answer5, setAnswer5] = useState("");
    const fetchContactTaglineSecData = async () => {
        try {
            console.log("id ya hay ====>>>", id);
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/FAQ_Section/${id}`)
            const result = await response.json();
            const data = result.data;
            setpageName(data?.page)
            setparentHeading(data.type)
            setheading(data?.metas[0]?.meta_key)
            setheadingValue(data?.metas[0]?.meta_value)
            setQuestion1(data?.questions_answers[0]?.question)
            setAnswer1(data?.questions_answers[0]?.answer)
            setQuestion2(data?.questions_answers[1]?.question)
            setAnswer2(data?.questions_answers[1]?.answer)
            setQuestion3(data?.questions_answers[2]?.question)
            setAnswer3(data?.questions_answers[2]?.answer)
            setQuestion4(data?.questions_answers[3]?.question)
            setAnswer4(data?.questions_answers[3]?.answer)
            setQuestion5(data?.questions_answers[4]?.question)
            setAnswer5(data?.questions_answers[4]?.answer)

            console.log("data for home page  ====>>>", result);
        } catch (error) {
            console.log("Fetch error ===>>>", error)
        }
        finally {

        }
    }


    const updateContactTaglineSecData = async () => {
        try {
            const formData = new FormData()
            formData.append("heading", headingValue)
            formData.append("question[]", question1)
            formData.append("question[]", question2)
            formData.append("question[]", question3)
            formData.append("question[]", question4)
            formData.append("question[]", question5)
            formData.append("answer[]", Answer1)
            formData.append("answer[]", Answer2)
            formData.append("answer[]", Answer3)
            formData.append("answer[]", Answer4)
            formData.append("answer[]", Answer5)

            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/contact-us-page/FAQ_Section/${id}`,
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
        fetchContactTaglineSecData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {pageName} {parentHeading} {heading}</h2>
                    <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
                        e.preventDefault()
                        updateContactTaglineSecData()
                    }}>
                        <label htmlFor="heading" className="db-hd-mini">{heading}</label>
                        <input type="text" name="heading" id="heading" defaultValue={headingValue} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="question" className="db-hd-mini mt-5">Question 1</label>
                        <input type="text" name="question[]" id="question" defaultValue={question1} onChange={(e) => setQuestion1(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="answer" className="db-hd-mini mt-5">Answer 1</label>
                        <textarea type="text" name="answer[]" id="answer" defaultValue={Answer1} onChange={(e) => setAnswer1(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="question" className="db-hd-mini mt-5">Question 2</label>
                        <input type="text" name="question[]" id="question" defaultValue={question2} onChange={(e) => setQuestion2(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="answer" className="db-hd-mini mt-5">Answer 2</label>
                        <textarea type="text" name="answer[]" id="answer" defaultValue={Answer2} onChange={(e) => setAnswer2(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="question" className="db-hd-mini mt-5">Question 3</label>
                        <input type="text" name="question[]" id="question" defaultValue={question3} onChange={(e) => setQuestion3(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="answer" className="db-hd-mini mt-5">Answer 3</label>
                        <textarea type="text" name="answer[]" id="answer" defaultValue={Answer3} onChange={(e) => setAnswer3(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="question" className="db-hd-mini mt-5">Question 4</label>
                        <input type="text" name="question[]" id="question" defaultValue={question4} onChange={(e) => setQuestion4(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="answer" className="db-hd-mini mt-5">Answer 4</label>
                        <textarea type="text" name="answer[]" id="answer" defaultValue={Answer4} onChange={(e) => setAnswer4(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="question" className="db-hd-mini mt-5">Question 5</label>
                        <input type="text" name="question[]" id="question" defaultValue={question5} onChange={(e) => setQuestion5(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

                        <label htmlFor="answer" className="db-hd-mini mt-5">Answer 5</label>
                        <textarea type="text" name="answer[]" id="answer" defaultValue={Answer5} onChange={(e) => setAnswer5(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />

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