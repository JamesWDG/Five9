"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Cookies from "js-cookie"
const page = () => {
    const router = useRouter();
    const [list, setList] = useState([]);
    const [innerPageslist, setinnerPageslist] = useState([]);
    const listNav = {
        Banner_Section: 'Banner_Section',
        Capabilities_Section: 'Capabilities_Section',
        Cards_Section: 'Cards_Section',
        Work_Togather_Section: 'Work_Togather_Section',
        Delivery_Modules_Section: 'Delivery_Modules_Section',
        Expertise_Section: 'Expertise_Section',
    }
    
    const listNav2 = {
        transformation: 'transformation',
        artificial_intelligence: 'artificial_intelligence',
        security: 'security',
        infrastructure: 'infrastructure',
        enterprise_applications: 'enterprise_applications',
        applications: 'applications',
        data_engineering: 'data_engineering',
        cloud: 'cloud',
    }


    const fetchHomePageData = async () => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/main-list`, {
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
    const fetchCapInnerPagesData = async () => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-capabilities-page/inner-pages`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            console.log("Result of second list ===>>> ", result);
            setinnerPageslist(result?.data || [])
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
        fetchCapInnerPagesData();
    }, [])

    // useEffect
    return (
        <>
            <DashboardHeader />
            <section className="db-table dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Capabilities Page</h2>
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
                                            <button onClick={() => router.push(`/dashboard/capabilities-page/${listNav[item?.slug]}/?id=${item?.id}`)} className="form-submit-btn text-white">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <h2 className="db-hd mt-5">Edit Capabilities Inner Page</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                innerPageslist?.map(inner => (
                                    <tr key={inner}>
                                        <td className="text-capitalize">{inner}</td>
                                        <td>
                                            <button onClick={() => router.push(`/dashboard/capabilities-page/capabilities-inner-pages/${listNav2[inner]}`)} className="form-submit-btn text-white">
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
