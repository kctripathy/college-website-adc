import React from "react";
import MenuListItem from "../../commons/MenuListItem";
const StaffsLeftMenu = ({ EmployeeID }) => {
  return (
    <>
      <MenuListItem
        addview={true}
        destination={`/user/add-activity/staff/${EmployeeID}`}
        viewDestination={`/user/view-activities/staff/${EmployeeID}`}
        title="Activity"
      />
      {/*       
      <MenuListItem
        destination={`/user/view-activities/staff/${EmployeeID}`}
        title="View Activities"
      /> */}

      <MenuListItem
        addview={true}
        destination={`/user/add-publication/staff/${EmployeeID}`}
        viewDestination={`/user/view-publications/staff/${EmployeeID}`}
        title="Publication"
      />
      {/* <MenuListItem
        destination={`/user/view-publications/staff/${EmployeeID}`}
        title="View Publications"
      /> */}

      <MenuListItem
        destination={`/user/feedback/staff/${EmployeeID}`}
        title="Submit Feedback"
      />
    </>
  );
};

export default StaffsLeftMenu;
