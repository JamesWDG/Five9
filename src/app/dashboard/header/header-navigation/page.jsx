"use client"

import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import { navigationData } from "@/data/navigation"

const Page = () => {
  const router = useRouter()

  const handleEdit = (item) => {
    router.push(`/dashboard/header/header-navigation/edit-header-navigation/${item.id}`)
  }

  return (
    <>
      <DashboardHeader />
      <section className="db-table dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">Edit Header Navigation</h2>
          <table className="data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Page Name</th>
                {/* <th>Type</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {navigationData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.heading}</td>
                  {/* <td>{item.type}</td> */}
                  <td>
                    <button onClick={() => handleEdit(item)} className="form-submit-btn text-white">Edit </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="btn-wrapper">
            <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
          </div>
        </div>
      </section >
    </>
  )
}

export default Page
