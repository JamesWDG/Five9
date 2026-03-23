"use client"

import { useRouter, useSearchParams } from "next/navigation"
import DashboardHeader from "@/components/DashboardHeader"
import { navigationData, navigationDataFooter } from "@/data/navigation"
import { useEffect, useState } from "react"

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id")
  const router = useRouter()
  const [parentHeading, setParentHeading] = useState("")
  const [listFooter, setlistFooter] = useState([]);

  const fetchFooterNavigationList = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard/cms/footer/Footer_Navigation/${id}`, {
        method: "GET",
      })
      const result = await response.json();
      const data = result.data;
      console.log("result of footer navigation list is ====>>>", data);
      setlistFooter(data.metas)
      setParentHeading(data.type)
    } catch (error) {
      console.log(error);

    }
    finally {

    }
  }

  useEffect(() => {
    if (id) fetchFooterNavigationList()
  }, [id])


  const handleEdit = (item) => {
    router.push(
      `/dashboard/footer/Footer_Navigation/navigation/${item.id}`
    )
  }
  return (
    <>
      <DashboardHeader />
      <section className="db-table dashboard-inner-pages">
        <div className="container-fluid">
          <h2 className="db-hd">Edit {parentHeading} List</h2>
          <table className="data mb-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Page Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listFooter.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.meta_value}</td>
                  <td>
                    <button onClick={() => handleEdit(item)} className="form-submit-btn text-white">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/*  <form action="" className="db-form">
            <h3 className="db-hd-mini mb-0 text-center">Footer contact Info box 1</h3>
            <label htmlFor="footerContactHeading1" className="db-hd-mini mt-4">heading</label>
            <input type="url" name="footerContactHeading1" id="footerContactHeading1" className="header-input" placeholder="Heading goes here ex: Reach Us" />
            <label htmlFor="footerContactNumber" className="db-hd-mini mt-4">Footer Contact number</label>
            <input type="text" name="footerContactNumber" id="footerContactNumber" className="header-input" placeholder="Enter text" />
            <label htmlFor="footerContactMail" className="db-hd-mini mt-4">Footer contact email</label>
            <input type="text" name="footerContactMail" id="footerContactMail" className="header-input" placeholder="Enter text" />

            <h3 className="db-hd-mini mb-0 mt-5 text-center">Footer contact Info box 2</h3>
            <label htmlFor="contactHeading1" className="db-hd-mini mt-4">heading</label>
            <input type="url" name="contactHeading1" id="contactHeading1" className="header-input" placeholder="Heading goes here ex: Contact Us " />
            <label htmlFor="footerAddressPara" className="db-hd-mini mt-4">para</label>
            <textarea type="text" name="footerAddressPara" id="footerAddressPara" className="header-input" placeholder="Enter text" />
          </form> */}

          <div className="btn-wrapper">
            {/* <button className="form-submit-btn update-btn" type="submit">Update</button> */}
            <button className="form-submit-btn back-btn-func" type="button" onClick={() => router.back()}>Back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
