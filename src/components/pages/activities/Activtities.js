import React from "react";
import Layout from "../Layout";
import titleCase from "../../commons/CommonFunctions";

import ActivitiesContent from "./ActivitiesContent";

export default function Activities({ match }) {
  return (
    <Layout title={`${titleCase(match.params.page.replace(/-/g, " "))}`}>
      <ActivitiesContent page={match.params.page} />
    </Layout>
  );
}
