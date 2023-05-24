import "react-quill/dist/quill.snow.css";
import { Tabs } from "antd";
import WysiwygEditor from "./WysiwygEditor";

import CodeEditorComponent from "./CodeEditor";

const CreateTemplates = () => {
  return (
    <>
      <Tabs
        tabPosition="left"
        items={[
          { label: "Wysiwyg", key: "1", children: <WysiwygEditor /> },
          { label: "Code Editor", key: "2", children: <CodeEditorComponent /> },
        ]}
      />
    </>
  );
};

export default CreateTemplates;
