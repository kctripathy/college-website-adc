import React, { useState } from "react";
import Modal from "react-modal";
import Header from "./Header";
import NavBar from "./NavBar";
import NavRoutes from "./NavRoutes";
import Footer from "./Footer";

import { WEB_URL } from "../../config";

Modal.setAppElement("#root");

function Main() {
  const [run, setRun] = useState(false);
  const changeHeader = () => {
    setRun(!run);
  };

  console.log("WEB_URL=", WEB_URL);

  return (
    <div>
      <Header onHeaderChage={changeHeader} />
      <NavBar />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default Main;
