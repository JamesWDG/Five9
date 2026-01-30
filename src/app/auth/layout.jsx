"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/app/Auth.css"
import "@fortawesome/fontawesome-free/css/all.min.css"


export default function Layout({ children }) {
    return (
        <html lang="en">
            <body style={{height:"100% !important"}}>
                {children}
            </body>
        </html>
    )
}
