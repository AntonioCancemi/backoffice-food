import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ImageZoomModal = ({ image }) => {
  console.log(image);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <img
        onClick={handleImageClick}
        width={100}
        src={image}
        alt={`Product Image`}
      />

      <Modal show={showModal} onHide={handleModalClose} centered size="lg">
        <Modal.Header>
          <Button onClick={handleModalClose} className="btn-close"></Button>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            width={700}
            src={image}
            alt={`Product Image`}
            className="zoomed-image"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageZoomModal;
