import { useState } from "react";
import CommonModal from "../common/modal/CommonModal";
import CodeEditor from "@uiw/react-textarea-code-editor";
import parse from "html-react-parser";
import { Button } from "antd";

const CodeEditorComponent = () => {
  const [code, setCode] = useState("<h1>Hello world</h1>");
  return (
    <div className="container   mx-auto flex flex-wrap">
      <div className="h-full w-full p-4 lg:w-3/4">
        <CodeEditor
          onChange={(evn) => setCode(evn.target.value)}
          language="html"
          value={code}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            color: "black",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
      <div className="h-full w-full p-4 lg:w-1/4 flex flex-col  items-center gap-5 ">
        <CommonModal buttonText="Preview">
          {parse(`<div>${code}</div>`)}
        </CommonModal>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default CodeEditorComponent;
