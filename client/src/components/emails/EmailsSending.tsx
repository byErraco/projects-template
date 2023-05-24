import React from "react";
import TransferList from "../common/transferList/TransferList";
import Box from "../common/box/Box";

const EmailsSending: React.FC = () => {
  return (
    <div className="container   mx-auto flex flex-wrap">
      <div className="h-full w-full p-4 lg:w-1/3">
        <TransferList />
      </div>
      <div className="h-full w-full p-4 lg:w-2/3">
        <Box>hello</Box>
      </div>
    </div>
  );
};

export default EmailsSending;
