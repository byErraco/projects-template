import React, { useState } from "react";
import { Button, Modal } from "antd";

const CommonModal: React.FC = ({ children, buttonText, footer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal
        // className="w-auto"
        width={300}
        title={buttonText}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};

export default CommonModal;
