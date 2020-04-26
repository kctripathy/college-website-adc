import React from "react";
import DashboardLayout from "../LayoutDashboard";
export default function StudentDashboard() {
  return (
    <DashboardLayout title={`Student's Dashboard`}>
      <div className="row d-flex text-left pl-4">
        <div
          className="col-12 p-1 m-0 mb-2 w-50 bg-page-title"
          style={{ marginLeft: "-20px !important" }}
        >
          <b>Student's Dashboard</b>
        </div>
      </div>
    </DashboardLayout>
  );
}
