import React from "react";
import MenuListItem from "../commons/MenuListItem";
import { isAuthenticated } from "../../api/user";

const AdminLeftMenu = (props) => {
  const { UserReferenceID } = isAuthenticated();
  console.log("....AdminLeftMenu");
  return (
    <>
      <MenuListItem
        destination="/administration/dashboard"
        title="Dashboard"
        showBadge={false}
      />
      <MenuListItem
        destination="/administration/establishments/manage"
        title="Manage All Establishments"
        showBadge={false}
      />
      <MenuListItem
        destination="/administration/establishment/notice"
        title="Add Notice"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/tender"
        title="Add Tender"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/circular"
        title="Add Circular"
        addview={true}
      />

      <MenuListItem
        destination={`/user/add-activity/staff/${UserReferenceID}`}
        title="Add Activity"
        addview={true}
      />
      <MenuListItem
        destination={`/user/add-publication/staff/${UserReferenceID}`}
        title="Add Publication"
        addview={true}
      />

      <MenuListItem
        destination="/administration/establishment/photo"
        title="Add Photo to Gallery"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/video"
        title="Add Video to Gallery"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/media"
        title="Add Media to Gallery"
        addview={true}
      />

      <MenuListItem
        destination="/administration/establishment/syllabus"
        title="Add Syllabus"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/download"
        title="Add to Download"
        addview={true}
      />
      <MenuListItem
        destination="/administration/establishment/meeting"
        title="Add Minutes of Meeting"
        addview={true}
      />
    </>
  );
};

export default React.memo(AdminLeftMenu);
