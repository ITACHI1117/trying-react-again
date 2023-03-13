import React, { useRef } from "react";
import Modal from "./Modal";

function UseImperativeHandle() {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log("parent rendered");
  return (
    <div>
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  );
}

export default UseImperativeHandle;
