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
                    <h2 className="db-hd">Edit Blog Page</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <td>item No.</td>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Hero Banner Background Video</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/Blog-page/blog-hero-banner-video")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Hero Banner Mini & Main Heading </td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/Blog-page/blog-mini-main-heading")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Text Slider Section (Marquee-Slider)</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/Blog-page/blog-cards")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Blog Card</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/Blog-page/blog-cards")} className="form-submit-btn text-white">
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
