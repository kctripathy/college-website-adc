import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../commons/Loading";
import { fetchStaffByEmployeeID } from "../../../actionMethods/staffActionMethods";
import StaffDetailRow from "./StaffDetailRow";
import Layout from "../Layout";
import PersonImage from "../../commons/PersonImage";

export default function StaffDefails({ match }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.staff);
  //const estb = useSelector((s) => s.estb);

  React.useEffect(() => {
    dispatch(fetchStaffByEmployeeID(Number(match.params.emp_id)));
  }, [match.params.emp_id]);

  const showStaffInformation = () => {
    const {
      EmployeeID,
      EmployeeCode,
      Salutation,
      EmployeeName,
      DesignationDescription,
      DepartmentDescription,
      Employeetype1,
      DateOfBirth,
      JoiningDateInOffice,
      BloodGroup,
      Address_Present_TownOrCity,
      Address_Present_LandMark,
      Address_Present_DistrictName,
      Address_Present_Pincode,
      Address_Permanent_TownOrCity,
      Address_Permanent_LandMark,
      Address_Permanent_DistrictName,
      Address_Permanent_Pincode,
      PhoneNumber,
      Mobile,
      EmailID,
    } = state.staff;

    // Get the present address
    let addr = "";
    if (Address_Present_TownOrCity && Address_Present_TownOrCity.length > 0) {
      addr = addr + Address_Present_TownOrCity;
    }
    if (Address_Present_LandMark && Address_Present_LandMark.length > 0) {
      addr = "\n" + addr + Address_Present_LandMark;
    }
    if (
      Address_Present_DistrictName &&
      Address_Present_DistrictName.length > 0
    ) {
      addr = addr + "\n" + Address_Present_DistrictName;
    }
    if (Address_Present_Pincode && Address_Present_Pincode.length > 0) {
      addr = addr + "\n" + Address_Present_Pincode;
    }

    // Get the permanent address
    let permanent_address = "";
    if (
      Address_Permanent_TownOrCity &&
      Address_Permanent_TownOrCity.length > 0
    ) {
      permanent_address = Address_Permanent_TownOrCity;
    }
    if (Address_Permanent_LandMark && Address_Permanent_LandMark.length > 0) {
      permanent_address = permanent_address + "\n" + Address_Permanent_LandMark;
    }
    if (
      Address_Permanent_DistrictName &&
      Address_Permanent_DistrictName.length > 0
    ) {
      permanent_address =
        permanent_address + "\n" + Address_Present_DistrictName;
    }
    if (Address_Permanent_Pincode && Address_Permanent_Pincode.length > 0) {
      permanent_address = permanent_address + "\n" + Address_Permanent_Pincode;
    }

    return (
      <>
        <div style={{ textAlign: "center", width: "100%" }}>
          <PersonImage usertype="employee" id={EmployeeID} />
        </div>
        <StaffDetailRow label="Name" value={Salutation + " " + EmployeeName} />
        <StaffDetailRow label="Designation" value={DesignationDescription} />
        <StaffDetailRow label="Department" value={DepartmentDescription} />
        <StaffDetailRow label="Emp. Type" value={Employeetype1} />
        <StaffDetailRow label="Date of Birth" value={DateOfBirth} />
        <StaffDetailRow label="Blood Group" value={BloodGroup} />
        <StaffDetailRow label="Date of Join" value={JoiningDateInOffice} />
        <StaffDetailRow label="Mobile Phone No." value={Mobile} />
        <StaffDetailRow label="Alternate Phone No." value={PhoneNumber} />
        <StaffDetailRow label="Email Address" value={EmailID} />

        <StaffDetailRow
          label="Present Address"
          value={`${addr}`}
          classStyle="line-break"
        />
        <StaffDetailRow
          label="Permanent Address"
          value={permanent_address}
          classStyle="line-break"
        />
        <StaffDetailRow label="Login Code" value={EmployeeCode} />
      </>
    );
  };

  return (
    <Layout title="Staff Details">
      {state.staff ? (
        showStaffInformation()
      ) : (
        <Loading text="Loading staff details" />
      )}
    </Layout>
  );
}
