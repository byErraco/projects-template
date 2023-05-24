import CommonCard from "../components/common/CommonCard";
import { Col, Row, Divider } from "antd";
import CommonTable from "../components/common/Table/CommonTable";
import NoteList from "../components/notes/NoteList";
function SummaryPage() {
  return (
    <>
      <div className="px-12">
        <span className="text-sm uppercase text-gray-400">Home</span>
        <div className="flex items-center justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
            Summary
          </h2>
          {/* <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
          Check our work
        </button> */}
        </div>
      </div>
      <Row gutter={16}>
        <Col span={8}>
          <CommonCard>
            <p className="text-gray-500 text-sm font-normal">Sales</p>
            <p className="text-gray-700 text-3xl m-0 font-semibold">$ 34,743</p>
          </CommonCard>
        </Col>
        <Col span={8}>
          <CommonCard>
            <p className="text-gray-500 text-sm font-normal">Sales</p>
            <p className="text-gray-700 text-3xl m-0 font-semibold">$ 34,743</p>
          </CommonCard>
        </Col>
        <Col span={8}>
          <CommonCard>
            <p className="text-gray-500 text-sm font-normal">Sales</p>
            <p className="text-gray-700 text-3xl m-0 font-semibold">$ 34,743</p>
          </CommonCard>
        </Col>
      </Row>
      <Divider className="border-2" dashed />
      <Row gutter={16}>
        <Col span={16}>
          <CommonTable />
        </Col>
        <Col span={8}>
          <CommonCard>
            <NoteList />
          </CommonCard>
        </Col>
      </Row>
    </>
  );
}

export default SummaryPage;
