import React from "react";
import CollegeSummary from "../pages/home/college-summary/CollegeSummary";
import LayoutDashboardAdmin from "../pages/LayoutDashboardAdmin";
import CollegeSummaryStudentSubjectsCount from "../pages/home/college-summary/CollegeSummaryStudentSubjectsCount";

export default function AdminDashboard() {
  return (
    <LayoutDashboardAdmin title="Administrator's Dashboard">
      <div className="row m-0 p-0">
        <div className="col-lg-6 col-sm-6 m-0 p-0 border border-light mt-2">
          <CollegeSummary />
        </div>
        <div className="col-lg-6 col-sm-12 m-0 p-0 text-center">
          <CollegeSummaryStudentSubjectsCount />
        </div>
      </div>
    </LayoutDashboardAdmin>
  );
}
