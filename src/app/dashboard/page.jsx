import DashboardHeader from '@/components/DashboardHeader'
import React from 'react'

const page = () => {
  return (
    <>
      <DashboardHeader />
      <section className='dashboard-sec dashboard-inner-pages contact-detials'>
        <div className="container-fluid">
          <div className="row main-padding main-padding3">
            <div className="col-12 text-center mb-4 index-hi-msg">
              <h2 className="fw-bold db-hd db-hd-admin">Welcome, Admin</h2>
              <p className="db-para text-muted dashboard-main-para">Manage and update website content efficiently from the dashboard.</p>
            </div>
            <div className="col-lg-6 col-xxl-4 col-md-6 col-sm-12">
              <div className="dash-box p-4 shadow-sm rounded text-center">
                <i className="fa-solid fa-table fa-3x mb-3"></i>
                <p className="db-para">Manage Tables</p>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 col-md-6 col-sm-12">
              <div className="dash-box dash-box2 p-4 shadow-sm rounded text-center w-100">
                <i className="fa-solid fa-list fa-3x mb-3"></i>
                <p className="db-para">Manage Lists</p>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 col-md-6 col-sm-12">
              <div className="dash-box dash-box3 p-4 shadow-sm rounded text-center">
                <i className="fa-solid fa-edit fa-3x mb-3"></i>
                <p className="db-para">Edit Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
