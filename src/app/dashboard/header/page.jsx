"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const page = () => {
    const router = useRouter();
    const [list, setList] = useState([]);
    const listNav = {
        Header_Logo: 'edit-header-logo',
        Header_Navigation: 'header-navigation',
        Header_button: 'header-button'
    }

    const fetchList = async () => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/main-list`, {
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
        fetchList();
    }, [])

    return (
        <>
            <DashboardHeader />
            <section className="db-table dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Header Navigation</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Page Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list?.map(item => (
                                    <tr key={item.id}>
                                        <td>{item?.type}</td>
                                        <td>
                                            <button onClick={() => router.push(`/dashboard/header/${listNav[item?.slug]}?id=${item?.id}`)} className="form-submit-btn text-white">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <tr>
                                <td>Header Logo</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/header/edit-header-logo")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Header Navigation</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/header/header-navigation")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Header button</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/header/header-button")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default page
