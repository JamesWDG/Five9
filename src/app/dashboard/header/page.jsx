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
                    <h2 className="db-hd">Edit Header Navigation</h2>
                    <table className="data">
                        <thead>
                            <tr>
                                <th>Page Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default page
