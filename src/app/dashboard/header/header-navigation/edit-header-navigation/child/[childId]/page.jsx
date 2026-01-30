"use client"

import { useParams } from "next/navigation"
import { navigationData } from "@/data/navigation"

const EditChild = () => {
  const { childId } = useParams()

  // 🔎 child + parent find karo
  let foundChild = null
  let foundParent = null

  navigationData.forEach((parent) => {
    const child = parent.children?.find(
      (c) => c.id === Number(childId)
    )

    if (child) {
      foundChild = child
      foundParent = parent
    }
  })

  if (!foundChild) return <p>Child not found</p>

  return (
    <>
      <div className="container-fluid">
        <h2 className="db-hd">Edit Sub Category</h2>

        {/* Parent info */}
        <p>
          <strong>Parent:</strong> {foundParent.heading}
        </p>

        {/* Child edit */}
        <label htmlFor="#" className="db-hd-mini">Sub Category Name</label>
        <input className="header-input" type="text" defaultValue={foundChild.heading} />
        <div className="btn-wrapper">
          <button className="form-submit-btn update-btn" type="submit">Update</button>
          <button className="form-submit-btn back-btn-func" type="button" onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
    </>
  )
}

export default EditChild
