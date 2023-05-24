import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNoteRequest } from "../api/notes";
import { Input, Button, Form } from "antd";
import { toast } from "sonner";
import CommonModal from "../components/common/modal/CommonModal";

type Inputs = {
  title: string;
  description: string;
};

function NoteFormPage() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createNoteRequest, {
    onSuccess: (data) => {
      toast(`Note titled ${data.title} created`);
      queryClient.setQueriesData(["notes"], (old) => [...old, data]);
    },
  });
  const onFinish = ({ title, description }: any) => {
    console.log("Success:", title, description);
    mutation.mutate({
      title,
      description,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CommonModal buttonText={"New Note"} footer={true}>
      <div className=" flex items-center justify-center">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CommonModal>
  );
}

export default NoteFormPage;
