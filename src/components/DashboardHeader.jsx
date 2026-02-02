"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import userImage from "@/app/dashboard/assets/images/user-img.png";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const DashboardHeader = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    let name = Cookies.get('name')
    const handleLogout = async () => {
        try {
            const token = Cookies.get('token')
            if (token) {
                await fetch(
                    `${process.env.NEXT_PUBLIC_APP_URL}/auth/logout`,
                    {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
            }
        } catch (error) {
            console.error("Logout API failed:", error);
        } finally {
            Cookies.remove('token');
            Cookies.remove('name');
            Cookies.remove('email');
            router.push("/auth/login");
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMenuClick = () => {
        if (window.innerWidth >= 1100) return;
        const sidebar = document.querySelector(".side-panel");
        if (sidebar) {
            sidebar.classList.toggle("show");
        }
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 col-2">
                        <div className="menu-serach">
                            <div className="mob-menu-btn d-xl-none">
                                <button onClick={handleMenuClick}>
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </div>
                            <div className="head-search-bar">
                                <form>
                                    <input type="text" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-10">
                        <div className="head-user-detail">
                            <div className="user-head-img">
                                <Image src={userImage} alt="user-profile" />
                                <div
                                    className="dropdown header-dropdown"
                                    ref={dropdownRef}
                                >
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        onClick={() => setOpen(!open)}
                                    >
                                        {name || ''}
                                    </button>
                                    {open && (
                                        <ul className="dropdown-menu show">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleLogout}
                                                >
                                                    Log out
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
