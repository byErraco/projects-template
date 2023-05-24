import { useState } from "react";
import CommonModal from "../common/modal/CommonModal";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import { Button } from "antd";

const WysiwygEditor = () => {
  const [value, setValue] = useState("Hello world");
  return (
    <div className="container   mx-auto flex flex-wrap">
      <div className="h-full w-full p-4 lg:w-3/4">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <div className="h-full w-full p-4 lg:w-1/4 flex flex-col  items-center gap-5">
        <CommonModal buttonText="Preview">
          {parse(`<div>${value}</div>`)}
        </CommonModal>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default WysiwygEditor;
