import React from "react";
import Layout from "./Layout";
import WorkinProgress from "./WorkInProgress";
function RTI() {
  return (
    <Layout title="Right To Information">
      <div className="row">
        <div className="col-lg-2 col-sm-12"></div>
        <div className="col-lg-8 co-sm-12">
          <WorkinProgress />
        </div>
        <div className="col-lg-2 co-sm-12"></div>
      </div>
    </Layout>
  );
}

export default RTI;
