import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EstablishmentsDetail from "./EstablishmentsDetail";

export default function EstablishmentModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //debugger;
    setIsOpen(props.isOpen);
  }, [props]);
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: { background: "rgba(255, 203, 5, 0.8)" },
      }}
    >
      <EstablishmentsDetail establishment={props.establishment} />
      <div className="row m-0 p-0 fixed-bottom mb-5">
        <div className="col-12 m-0 p-0 text-center">
          <button
            type="button"
            className="btn btn-primary text-center p-1 m-1 btn-width-150"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa fa-times mr-2"></i> CLOSE
          </button>
        </div>
      </div>
    </Modal>
  );
}
