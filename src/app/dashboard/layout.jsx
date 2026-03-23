"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/app/dashboard.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@/app/dashboard-responsive.css"
import "@/app/chatbot.css"

import SidebarDashboard from "@/components/SidebarDashboard"

export default function Layout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <html lang="en">
            <body>

                <div className="d-flex main-panel">

                    {/* SIDEBAR */}
                    <div className={`side-panel ${sidebarOpen ? "show" : ""}`}>
                        <SidebarDashboard
                            closeSidebar={() => setSidebarOpen(false)}
                        />
                    </div>

                    {/* PAGE CONTENT */}
                    <div className="flex-grow-1">
                        {children}
                    </div>

                </div>

            </body>
        </html>
    )
}
