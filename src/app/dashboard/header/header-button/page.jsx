// "use client"
// import DashboardHeader from '@/components/DashboardHeader'
// import React from 'react'

// const page = () => {
//     // const searchParams = useSearchParams();
//     const [btn, setbtn] = useState(null);

//     const updateButton = async () => {
//         try {
//             const id = searchParams.get('id');
//             const token = Cookies.get("token");
//             // const formData = new FormData();
//             // formData.append("logo", logo);
//             const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/getHeaderButton/${id}`, {
//                 method: "POST",
//                 headers: {
//                     "Authorization": `Bearer ${token}`,
//                 },
//                 body: formData
//             })
//             const result = await response.json();
//             console.log(result);
//         } catch (error) {

//         }
//     }
//     return (
//         <>
//             <DashboardHeader />
//             <section className="dashboard-inner-pages">
//                 <div className="container-fluid">
//                     <h2 className="db-hd">Edit Header Navigation</h2>
//                     <form action="" className="db-form" encType="multipart/form-data">
//                         <label htmlFor="header-name" className="db-hd-mini">Edit button text</label>
//                         <input type="text" name="header-name" id="header-name" className="header-input" placeholder="Enter button text" required />
//                         <div className="btn-wrapper">
//                             <button className="form-submit-btn update-btn" type="submit">Update</button>
//                             {/* <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button> */}
//                         </div>
//                         <label htmlFor="header-name" className="db-hd-mini mt-5">Edit button URL</label>
//                         <input type="text" name="header-name" id="header-name" className="header-input" placeholder="Enter button URL" required />
//                         <div className="btn-wrapper">
//                             <button className="form-submit-btn update-btn" type="submit">Update</button>
//                             <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
//                         </div>
//                     </form>
//                 </div >
//             </section >
//         </>
//     )
// }

// export default page



"use client";

import DashboardHeader from "@/components/DashboardHeader";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Page = () => {
    const [buttonText, setButtonText] = useState("");
    const [buttonUrl, setButtonUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const updateButton = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = Cookies.get("token");

            const response = await fetch(
                // "http://172.168.2.122:8000/api/dashboard/cms/header/update-header-button/3",
                `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/update-header-button/${id}`,
                {
                    method: "POST", // ya PUT (API ke hisaab se)
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        button_text: buttonText,
                        button_url: buttonUrl,
                    }),
                }
            );

            const result = await response.json();
            console.log(result);

            alert("Button updated successfully!");
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <DashboardHeader />
            <section className="dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Header Navigation</h2>

                    <form className="db-form" onSubmit={updateButton}>
                        <label className="db-hd-mini">Edit button text</label>
                        <input
                            type="text"
                            className="header-input"
                            placeholder="Enter button text"
                            value={buttonText}
                            onChange={(e) => setButtonText(e.target.value)}
                            required
                        />

                        <label className="db-hd-mini mt-4">Edit button URL</label>
                        <input
                            type="text"
                            className="header-input"
                            placeholder="Enter button URL"
                            value={buttonUrl}
                            onChange={(e) => setButtonUrl(e.target.value)}
                            required
                        />

                        <div className="btn-wrapper mt-4">
                            <button className="form-submit-btn update-btn" type="submit">
                                {loading ? "Updating..." : "Update"}
                            </button>

                            <button
                                className="form-submit-btn back-btn-func"
                                type="button"
                                onClick={() => window.history.back()}
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
