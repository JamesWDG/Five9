"use client"

import React from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const page = () => {
  const router = useRouter()
    return (
        <>
            <DashboardHeader />
            <section className="db-table">
                <div className="container-fluid">
                    <h2 className="db-hd">Edit Footer Navigation</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Page Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Footer Logo & Para</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/footer/edit-footer-logo")} className="form-submit-btn text-white">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Footer Navigation & Social Links</td>
                                <td>
                                    <button onClick={() => router.push("/dashboard/footer/footer-navigation")} className="form-submit-btn text-white">
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
