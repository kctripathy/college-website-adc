import React from "react";
import DashboardLayout from "../LayoutDashboard";
import EstablishmentsAdd from "../../commons/EstablishmentsAdd";

export default function UserAddActivity() {
  return (
    <DashboardLayout title="Add Activity">
      <EstablishmentsAdd
        title="Add New Recent Activity"
        code="R"
        description="Recent Activity"
      />
    </DashboardLayout>
  );
}
