"use client"
import React from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {
    const router = useRouter()
    return (
        <>
            <DashboardHeader />
            <section className="db-table dashboard-inner-pages">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Services Inner Page 1 (Strategy)</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Hero Banner Background Video</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/services-page/services-inner-pages/strategy-page/strategy-hero-banner-video")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Hero Banner Mini & Main Heading </td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/services-page/services-inner-pages/strategy-page/strategy-mini-main-heading")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Section (Bridge Strategy)</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/services-page/services-inner-pages/strategy-page/section-strategy-page")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default page
