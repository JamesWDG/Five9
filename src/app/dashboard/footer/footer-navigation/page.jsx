"use client"

import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import { navigationData, navigationDataFooter } from "@/data/navigation"

const page = () => {
  const router = useRouter()

  const handleEdit = (id) => {
    router.push(
      `/dashboard/footer/footer-navigation/edit-footer-navigation/${id}`
    )
  }

  return (
    <>
      <DashboardHeader />
      <section className="db-table dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">Edit Footer Navigation List</h2>
          <table className="data mb-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Page Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {navigationDataFooter.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.heading}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)} className="form-submit-btn text-white">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <form action="" className="db-form">

            {/* INFO BOX 1 */}
            <h3 className="db-hd-mini mb-0 text-center">Footer contact Info box 1</h3>
            <label htmlFor="footerContactHeading1" className="db-hd-mini mt-4">heading</label>
            <input type="url" name="footerContactHeading1" id="footerContactHeading1" className="header-input" placeholder="Heading goes here ex: Reach Us" />
            <label htmlFor="footerContactNumber" className="db-hd-mini mt-4">Footer Contact number</label>
            <input type="text" name="footerContactNumber" id="footerContactNumber" className="header-input" placeholder="Enter text" />
            <label htmlFor="footerContactMail" className="db-hd-mini mt-4">Footer contact email</label>
            <input type="text" name="footerContactMail" id="footerContactMail" className="header-input" placeholder="Enter text" />
            {/* INFO BOX 1 */}

            {/* INFO BOX 2 */}
            <h3 className="db-hd-mini mb-0 mt-5 text-center">Footer contact Info box 2</h3>
            <label htmlFor="contactHeading1" className="db-hd-mini mt-4">heading</label>
            <input type="url" name="contactHeading1" id="contactHeading1" className="header-input" placeholder="Heading goes here ex: Contact Us " />
            <label htmlFor="footerAddressPara" className="db-hd-mini mt-4">para</label>
            <textarea type="text" name="footerAddressPara" id="footerAddressPara" className="header-input" placeholder="Enter text" />
            {/* INFO BOX 2 */}
          </form>
          <div className="btn-wrapper">
            {/* <button className="form-submit-btn update-btn" type="submit">Update</button> */}
            <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
