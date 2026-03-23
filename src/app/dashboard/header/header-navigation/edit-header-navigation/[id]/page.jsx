"use client"

import { useParams, useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

const EditParent = () => {
  const { id } = useParams()
  const router = useRouter()
  // FOR PARENT
  const [parent, setParent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  // FOR PARENT

  // 🔹 FETCH DATA
  const fetchParent = async () => {
    try {
      const token = Cookies.get("token")

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/navigation/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const result = await response.json()
      const data = result.data

      setParent(data)
      setName(data.meta_value || "")
      setUrl(data.cms_meta_values?.[0]?.value || "")
      console.log(result.data);

    } catch (error) {
      console.log("Fetch error ===>>>", error)
    } finally {
      setLoading(false)
    }
  }
  // 🔹 UPDATE API (FormData)
  const handleUpdateMetaValues = async () => {
    try {
      const token = Cookies.get("token")

      const formData = new FormData()
      formData.append("navigation", name)
      formData.append("url", url)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/update-navigation-meta/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      const result = await response.json()
      console.log("Update result:", result)

      if (!result.status) {
        console.log("Validation errors:", result.errors)
      }
    } catch (error) {
      console.log("Update error ===>>>", error)
    }
  }

  // FOR CHILD FETCHING
  const [childList, setchildList] = useState([]);
  // FOR CHILD FETCHING

  const fetchChild = async () => {
    try {
      const tokens = Cookies.get("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/header/navigation/${id}`, {
        headers: {
          method: "GET",
          Authorization: `Bearer ${tokens}`,
          'Content-Type': 'application/json',
        },
      })
      console.log("cms id=======>>>>", id);

      const result = await response.json();
      setchildList(result.data?.cms_meta_values[0].children);
      console.log("child list ", childData.length);
    }
    catch (error) {

    }
    finally {

    }
  }

  useEffect(() => {
    if (id) fetchParent()
  }, [id])

  useEffect(() => {
    fetchChild()
  }, [])

  if (loading) return <p>Loading...</p>
  if (!parent) return <p>Not found</p>

  return (
    <>
      <DashboardHeader />

      <section className="dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">
            Edit Header Navigation {parent.meta_value}
          </h2>
          <form
            className="db-form"
            onSubmit={(e) => {
              e.preventDefault()
              handleUpdateMetaValues()
            }}
          >
            <label className="db-hd-mini">
              Edit navigation link name
            </label>

            <input
              type="text"
              className="header-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="db-hd-mini mt-5">
              Edit navigation link URL
            </label>

            <input
              type="url"
              className="header-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <div className="btn-wrapper">
              <button
                type="submit"
                className="form-submit-btn update-btn"
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

          {/* CHILDREN */}
          {childList && childList.length > 0 && (
            <>
              <h3 className="db-hd-mini mt-5 mb-5">
                {parent.heading} Sub Categories
              </h3>

              <table className="data">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {childList.map((item) => (
                    console.log(item),

                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.key}</td>
                      <td>
                        <button
                          className="form-submit-btn"
                          onClick={() =>
                            router.push(
                              `/dashboard/header/header-navigation/edit-header-navigation/child/${item.id}`
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default EditParent
