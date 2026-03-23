"use client"

import DashboardHeader from "@/components/DashboardHeader"
import Cookies from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const EditChild = () => {
  const router = useRouter()
  const { childId } = useParams()   // ✅ route param

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [parentName, setParentName] = useState("")

  // 🔹 FETCH CHILD DATA
  const fetchChildData = async () => {
    try {
      const token = Cookies.get("token")

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/child-navigation/${childId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const result = await response.json()

      if (!result.status) {
        Swal.fire("Error", "Child not found", "error")
        return
      }

      const data = result.data

      setName(data.key || "")
      setUrl(data.value || "")
      setParentName(data.parent?.cms_meta?.meta_value || "")

    } catch (error) {
      console.log("Fetch error ===>>>", error)
    } finally {
      setLoading(false)
    }
  }

  // 🔹 UPDATE CHILD DATA
  const handleUpdateChild = async () => {
    try {
      const token = Cookies.get("token")
console.log(name,url);

      if (!name || !url) {
        Swal.fire("Error", "Both fields are required", "error")
        return
      }

      const formData = new FormData()
      formData.append("title", name) // ✅ backend expects this
      formData.append("url", url)          // ✅ backend expects this

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/update-child-navigation-meta/${childId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      const result = await response.json()

      if (!result.status) {
        Swal.fire("Error", result.message || "Validation failed", "error")
        return
      }

      Swal.fire("Success", "Sub category updated successfully", "success")
      router.back()

    } catch (error) {
      console.log("Update error ===>>>", error)
      Swal.fire("Error", "Failed to update child", "error")
    }
  }

  useEffect(() => {
    if (childId) fetchChildData()
  }, [childId])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <DashboardHeader />

      <div className="container-fluid">
        <h2 className="db-hd">Edit Sub Category</h2>

        <p className="db-hd-mini">
          <strong>Parent:</strong> {parentName}
        </p>

        <form className="db-form" onSubmit={e => e.preventDefault()}>
          {/* Prevent form submit */}
          <label className="db-hd-mini">Sub Category Name</label>
          <input
            className="header-input"
            type="text"
            value={name}
            name="title"
            onChange={e => setName(e.target.value)}
          />

          <label className="db-hd-mini mt-5">Sub Category Link URL</label>
          <input
            className="header-input"
            type="text"
            value={url}
            name="url"
            onChange={e => setUrl(e.target.value)}
          />

          <div className="btn-wrapper">
            <button
              type="button" // ✅ change to button so it doesn’t submit form
              className="form-submit-btn update-btn"
              onClick={handleUpdateChild} // ✅ call on click
            >
              Update
            </button>

            <button
              type="button"
              className="form-submit-btn back-btn-func"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditChild
