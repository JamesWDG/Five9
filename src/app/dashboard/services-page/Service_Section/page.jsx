"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import Swal from "sweetalert2"
import Cookies from "js-cookie"
const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams("id");
  const id = searchParams.get('id');
  // console.log(id);

  const [PageHeading, setPageHeading] = useState("");
  const [parentHeading, setParentHeading] = useState("");

  const fetchServicesSecData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/our-services-page/Services_Section/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const data = result.data;
      console.log("Result ya arah hay ===>>> ", data);

      setPageHeading(data.page)
      setParentHeading(data.type)

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
    fetchServicesSecData();
  }, [])
  return (
    <>
      <DashboardHeader />
      <section className="dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">Edit {PageHeading} {parentHeading} {"heading"}    </h2>
          <form action="" className="db-form" encType="multipart/form-data" onSubmit={(e) => {
            e.preventDefault()
            updateServicesSecData()
          }}>
            <label htmlFor="heading" className="db-hd-mini">{"heading"}</label>
            <input type="text" name="heading" id="heading" value={"headingValue"} onChange={(e) => setheadingValue(e.target.value)} className="header-input" placeholder="Mini Heading Goes here" required />
            <div className="btn-wrapper">
              <button className="form-submit-btn update-btn" type="submit">
                Update
              </button>
              <button className="form-submit-btn back-btn-func" type="button" onClick={() => router.back()}>Back</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default page