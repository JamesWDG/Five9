"use client";

import DashboardHeader from "@/components/DashboardHeader";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const router = useRouter();

    const [clientParentHeading, setclientParentHeading] = useState("");
    const [parentHeading, setparentHeading] = useState("");
    const [parentHeadingValue, setparentHeadingValue] = useState("");

    const [state, setState] = useState([]);

    // =========================
    // HANDLE INPUT CHANGE
    // =========================
    const SetDynamicValues = (value, index, fieldName) => {
        const tempData = [...state];
        tempData[index][fieldName] = value;
        setState(tempData);
    };

    // =========================
    // FETCH DATA
    // =========================
    useEffect(() => {
        if (id) fetchTestimonialSecData();
    }, [id]);

    const fetchTestimonialSecData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/Testimonials_Section/${id}`
            );

            const result = await response.json();
            const data = result.data;

            setclientParentHeading(data.type);
            setparentHeading(data.metas?.[0]?.meta_key || "");
            setparentHeadingValue(data.metas?.[0]?.meta_value || "");
            setState(data.cards || []);
        } catch (error) {
            console.log("Fetch error ===>>>", error);
        }
    };

    // =========================
    // ADD MORE CARD
    // =========================
    const AddMore = () => {
        setState([
            ...state,
            {
                id: null, // new item has no id
                title: "",
                para: "",
                client_name: "",
                client_designation: "",
                client_company_name: "",
            },
        ]);
    };

    // =========================
    // REMOVE CARD
    // =========================
    const RemoveCard = async (index) => {
        const cardToDelete = state[index];

        // Agar backend id exist karti hai to API call karo
        if (cardToDelete?.id) {
            try {
                await fetch(
                    `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/delete_testimonial_card/${cardToDelete.id}`,
                    {
                        method: "DELETE",
                    }
                );
            } catch (error) {
                console.log("Delete API error", error);
            }
        }

        // UI se remove karo
        const updatedState = state.filter((_, i) => i !== index);
        setState(updatedState);
    };

    // =========================
    // UPDATE DATA
    // =========================
    const updateTestimonialSecData = async () => {
        try {
            const formdata = new FormData();
            formdata.append("heading", parentHeadingValue);

            state.forEach((item, index) => {
                formdata.append(`title[${index}]`, item.title);
                formdata.append(`para[${index}]`, item.para);
                formdata.append(`client_name[${index}]`, item.client_name);
                formdata.append(
                    `client_designation[${index}]`,
                    item.client_designation
                );
                formdata.append(
                    `client_company_name[${index}]`,
                    item.client_company_name
                );
            });

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/Testimonials_Section/${id}`,
                {
                    method: "POST",
                    body: formdata,
                }
            );

            await fetchTestimonialSecData();
            const result = await response.json();
            const data = result.data;
            console.log("updated result ====>>>", data);

        } catch (error) {
            console.log("API error", error);
        }
    };

    return (
        <>
            <DashboardHeader />

            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit {clientParentHeading}</h2>

                    <form
                        className="db-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateTestimonialSecData();
                        }}
                    >
                        {/* MAIN HEADING */}
                        <label className="db-hd-mini">
                            Edit {parentHeading}
                        </label>

                        <input
                            type="text"
                            value={parentHeadingValue}
                            onChange={(e) => setparentHeadingValue(e.target.value)}
                            className="header-input file"
                        />

                        {/* TESTIMONIAL CARDS */}
                        {state.map((item, index) => (
                            <div key={item.id ?? index}>
                                <h2 className="db-hd-mini mb-3 mt-5 text-center">
                                    Testimonial {index + 1}
                                </h2>

                                <label className="db-hd-mini">Edit Title</label>
                                <input
                                    type="text"
                                    value={item.title}
                                    className="header-input file mb-3"
                                    onChange={(e) =>
                                        SetDynamicValues(e.target.value, index, "title")
                                    }
                                />

                                <label className="db-hd-mini">Edit Para</label>
                                <textarea
                                    value={item.para}
                                    className="header-input file mb-3"
                                    onChange={(e) =>
                                        SetDynamicValues(e.target.value, index, "para")
                                    }
                                />

                                <label className="db-hd-mini">Client Name</label>
                                <input
                                    type="text"
                                    value={item.client_name}
                                    className="header-input file mb-3"
                                    onChange={(e) =>
                                        SetDynamicValues(e.target.value, index, "client_name")
                                    }
                                />

                                <label className="db-hd-mini">Designation</label>
                                <input
                                    type="text"
                                    value={item.client_designation}
                                    className="header-input file mb-3"
                                    onChange={(e) =>
                                        SetDynamicValues(
                                            e.target.value,
                                            index,
                                            "client_designation"
                                        )
                                    }
                                />

                                <label className="db-hd-mini">Company Name</label>
                                <input
                                    type="text"
                                    value={item.client_company_name}
                                    className="header-input file mb-3"
                                    onChange={(e) =>
                                        SetDynamicValues(
                                            e.target.value,
                                            index,
                                            "client_company_name"
                                        )
                                    }
                                />

                                {/* REMOVE BUTTON */}
                                <button
                                    type="button"
                                    className="form-submit-btn back-btn-func mb-4"
                                    onClick={() => RemoveCard(index)}
                                >
                                    Remove This Testimonial
                                </button>

                                <hr />
                            </div>
                        ))}

                        {/* BUTTONS */}
                        <div className="btn-wrapper">
                            <div className="gap-2 d-flex">
                                <button
                                    className="form-submit-btn update-btn"
                                    type="submit"
                                >
                                    Update
                                </button>

                                <button
                                    className="form-submit-btn update-btn"
                                    type="button"
                                    onClick={AddMore}
                                >
                                    Add More
                                </button>
                            </div>

                            <button
                                className="form-submit-btn back-btn-func"
                                type="button"
                                onClick={() => router.back()}
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Page;