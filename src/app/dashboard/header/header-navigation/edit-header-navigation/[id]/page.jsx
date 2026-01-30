"use client"

import { useParams, useRouter } from "next/navigation"
import { navigationData } from "@/data/navigation"
import DashboardHeader from "@/components/DashboardHeader"

const EditParent = () => {
  const { id } = useParams()
  const router = useRouter()

  const parent = navigationData.find(
    (item) => item.id === Number(id)
  )

  if (!parent) return <p>Not found</p>

  return (
    <>
      <DashboardHeader />
      <section className="dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">Edit Header Navigation</h2>

          {/* Parent name */}
          <form action="" className="db-form">
            <label htmlFor="#" className="db-hd-mini">edit navigation link name</label>
            <input type="text" className="header-input" defaultValue={parent.heading} />
          </form>
          <div className="btn-wrapper">
            <button className="form-submit-btn update-btn" type="submit">Update</button>
            <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
          </div>
          {/* Parent name */}
          {/* CHILDREN TABLE */}
          {parent.type === "dropdown" && (
            <>
              <h3 className="db-hd-mini mt-5 mb-5">{`${parent.heading}`} Sub Categories</h3>

              <table border="1" cellPadding="10" className="data">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {parent.children.map((child) => (
                    <tr key={child.id}>
                      <td>{child.id}</td>
                      <td>{child.heading}</td>
                      <td>
                        <button className="form-submit-btn" onClick={() => router.push(`/dashboard/header/header-navigation/edit-header-navigation/child/${child.id}`)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="btn-wrapper">
                {/* <button className="form-submit-btn update-btn" type="submit">Update</button> */}
                <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
              </div>
            </>
          )}
          {/* CHILDREN TABLE */}
        </div>
      </section>
    </>
  )
}

export default EditParent
