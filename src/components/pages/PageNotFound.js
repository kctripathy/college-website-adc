import React from "react";
import Layout from "./Layout";

function PageNotFound() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 p-5 text-center">
          <h4 className="m-10 p-10 text-danger">Error 404 : Page not found</h4>
          <p>The page you requested doesn't exists or work is in progress</p>
        </div>
      </div>
    </Layout>
  );
}

export default PageNotFound;
