"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Swal from "sweetalert2"

const page = () => {
    const router = useRouter();
    const [aboutMainList, setAboutMainList] = useState([]);
    const listNav = {
        Banner_Section: 'Banner_Section',
        Content_Section: 'Content_Section',
        Contact_Section: 'Contact_Section',
    }
    const fetchAboutPageData = async () => {
        try {
            // const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/terms-condition-page/main-list`, {
                method: "GET",
                // headers: {
                //     "Authorization": `Bearer ${token}`,
                //     "Content-Type": "application/json",
                // },
            })
            const result = await response.json();
            const data = result.data;
            console.log("data ya hay apna ====>>>", result.data);
            setAboutMainList(data)

            // setAboutMainList(data.)
        } catch (error) {
            console.error("FETCH ERROR:", error);
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Oops!",
                text: "Cannot fetch dashboard list.",
            });
        }
    }
    useEffect(() => {
        fetchAboutPageData();
    }, [])
    return (
        <>
            <DashboardHeader />
            <section className="db-table dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Terms & Condition</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Item No.</th>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                aboutMainList?.map(item => (
                                    <tr key={item.id}>
                                        <td>{item?.id}</td>
                                        <td>{item?.type}</td>
                                        <td>
                                            <button onClick={() => router.push(`/dashboard/terms-condition/${listNav[item?.slug]}?id=${item?.id}`)} className="form-submit-btn text-white">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default page
