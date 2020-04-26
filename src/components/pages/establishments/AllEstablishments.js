import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Establishments from "../../commons/Establishments";

const AllEstablishments = (props) => {
  const getIndex = () => {
    switch (props.match.params.estbTypeCode) {
      case "N":
        return 0;

      case "T":
        return 1;

      case "C":
        return 2;

      case "R":
        return 3;

      default:
        return 0;
    }
  };

  return (
    <Layout title="Establishments">
      <Establishments fromHomePage={false} activeIndex={getIndex()} />
    </Layout>
  );
};

export default AllEstablishments;
