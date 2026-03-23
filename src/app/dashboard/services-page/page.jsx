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
        Service_Section: 'Service_Section',
        How_We_Work_Section: 'How_We_Work_Section',
        Why_Choose_Us_Section: 'Why_Choose_Us_Section',
        Get_Started_Section: 'Get_Started_Section',
    }

    const listNav2 = {
        strategy: 'strategy',
        fractional_cto: 'fractional_cto',
        digital_services: 'digital_services',
        consulting: 'consulting',
        advisory: 'advisory',
    }


    const fetchHomePageData = async () => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-services-page/main-list`, {
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-services-page/inner-pages`, {
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
                    <h2 className="db-hd">Edit Services Page</h2>
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
                                            <button onClick={() => router.push(`/dashboard/services-page/${listNav[item?.slug]}/?id=${item?.id}`)} className="form-submit-btn text-white">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <h2 className="db-hd mt-5">Edit Services Inner Page</h2>
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
                                            <button onClick={() => router.push(`/dashboard/services-page/services-inner-pages/${listNav2[inner]}`)} className="form-submit-btn text-white">
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
