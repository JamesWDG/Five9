"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                toast: true,
                icon: "warning",
                title: "Oops!",
                text: "Email and password are required",
            });
            return;
        }
        try {
            setLoading(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }
            // document.cookie = `token=${data.token}; path=/; max-age=${60 * 60 * 24}`;
            Cookies.set("token", data.token, { expires: 1 });
            Cookies.set("name", data?.user?.name || '');
            Cookies.set("email", data?.user?.email || '');
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
                timer: 1500,
                showConfirmButton: false,
            });
            setTimeout(() => {
                router.push("/dashboard");
            }, 1500);
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: err.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="login-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="login-box">
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="input-icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <label>Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setFocused(true)}
                                        onBlur={() => {
                                            setFocused(false);
                                            setShowPassword(false);
                                        }}
                                    />
                                    <span
                                        className="input-icon toggle-password"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            if (focused) {
                                                setShowPassword((prev) => !prev);
                                            }
                                        }}
                                    >
                                        {!focused && <i className="fa-solid fa-lock"></i>}
                                        {focused && !showPassword && (
                                            <i className="fa-solid fa-eye"></i>
                                        )}
                                        {focused && showPassword && (
                                            <i className="fa-solid fa-eye-slash"></i>
                                        )}
                                    </span>
                                </div>
                                <div className="forgot-password">
                                    <Link href="/auth/forget-password">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <button type="submit" disabled={loading} className="login-btn">
                                    {loading ? "Logging in..." : "LOGIN"}
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
