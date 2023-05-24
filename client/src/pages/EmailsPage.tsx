import Box from "../components/common/box/Box";
import TransferList from "../components/common/transferList/TransferList";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import EmailsSending from "../components/emails/EmailsSending";
import Templates from "../components/emails/Templates";
import CreateTemplates from "../components/emails/CreateTemplates";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Send 📨`,
    children: <EmailsSending />,
  },
  {
    key: "2",
    label: `All Templates 🗒️`,
    children: <Templates />,
  },
  {
    key: "3",
    label: `Create Template 📝`,
    children: <CreateTemplates />,
  },
  {
    key: "4",
    label: `Configuration ⚙️`,
    children: ``,
  },
];

function EmailsPage() {
  return (
    <>
      <div>
        <span className="text-sm uppercase text-gray-400">Emails</span>
        <div className="flex items-center justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
            Send Emails
          </h2>
          {/* <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
      Check our work
    </button> */}
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
}

export default EmailsPage;
