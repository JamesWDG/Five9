"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Cookies from "js-cookie"
const page = () => {
    const router = useRouter();
    const [list, setList] = useState([]);
    const listNav = {
        Banner_Section: 'Banner_Section',
        Priority_Section: 'Priority_Section',
        Matter_Section: 'Matter_Section',
        Infrastructure_Matters_Section: 'Infrastructure_Matters_Section',
        Services_Section: 'Services_Section',
        Components_Section: 'Components_Section',
        Reliability_Section: 'Reliability_Section',
        Case_Study_Section: 'Case_Study_Section',
        Clearity_Section: 'Clearity_Section',
    }


    const fetchHomePageData = async () => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/infrastructure-page/main-list`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            console.log("Result ===>>> ", result);
            setList(result?.data || [])
        } catch (error) {
            console.error("FETCH ERROR:", error);
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Oops!",
                text: "Cannot fetch dashboard list.",
            });
        }
    };


    useEffect(() => {
        fetchHomePageData();
    }, [])

    // useEffect
    return (
        <>
            <DashboardHeader />
            <section className="db-table dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Infrastructure Page</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Item No</th>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list?.map(item => (
                                    <tr key={item.id}>
                                        <td>{item?.id}</td>
                                        <td>{item?.type}</td>
                                        <td>
                                            <button onClick={() => router.push(`/dashboard/capabilities-page/capabilities-inner-pages/infrastructure/${listNav[item?.slug]}/?id=${item?.id}`)} className="form-submit-btn text-white">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="form-submit-btn back-btn-func mt-5" type="button" onClick={() => router.back()}>Back</button>
                </div>
            </section>
        </>
    )
}

export default page
