"use client";

import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [focusedConfirm, setFocusedConfirm] = useState(false);

    return (
        <section className="login-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="login-box">
                            <h2>RESET PASSWORD</h2>

                            <form id="resetForm">
                                {/* EMAIL */}
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" required />
                                    <span className="input-icon">
                                        <i className="fa-solid fa-envelope" style={{ color: "#1C0011" }}></i>
                                    </span>
                                </div>

                                {/* PASSWORD */}
                                <div className="input-group">
                                    <label>Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        required
                                        onFocus={() => setFocusedPassword(true)}
                                        onBlur={() => setFocusedPassword(false)}
                                    />
                                    <span
                                        className="input-icon toggle-password"
                                        onMouseDown={(e) => {
                                            e.preventDefault(); // prevent blur
                                            if (focusedPassword) setShowPassword((prev) => !prev);
                                        }}
                                    >
                                        {!focusedPassword && <i className="fa-solid fa-lock" style={{ color: "#1C0011" }}></i>}
                                        {focusedPassword && !showPassword && <i className="fa-solid fa-eye" style={{ color: "#1C0011" }}></i>}
                                        {focusedPassword && showPassword && <i className="fa-solid fa-eye-slash" style={{ color: "#1C0011" }}></i>}
                                    </span>
                                </div>

                                {/* CONFIRM PASSWORD */}
                                <div className="input-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type={showConfirm ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        required
                                        onFocus={() => setFocusedConfirm(true)}
                                        onBlur={() => setFocusedConfirm(false)}
                                    />
                                    <span
                                        className="input-icon toggle-password"
                                        onMouseDown={(e) => {
                                            e.preventDefault(); // prevent blur
                                            if (focusedConfirm) setShowConfirm((prev) => !prev);
                                        }}
                                    >
                                        {!focusedConfirm && <i className="fa-solid fa-lock" style={{ color: "#1C0011" }}></i>}
                                        {focusedConfirm && !showConfirm && <i className="fa-solid fa-eye" style={{ color: "#1C0011" }}></i>}
                                        {focusedConfirm && showConfirm && <i className="fa-solid fa-eye-slash" style={{ color: "#1C0011" }}></i>}
                                    </span>
                                </div>

                                <button type="submit" className="login-btn">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
