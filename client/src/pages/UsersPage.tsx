import React from "react";
import CommonTable from "../components/common/Table/CommonTable";
import CreateUsers from "../components/users/CreateUsers";

const UsersPage = () => {
  return (
    <>
      <div className="px-12">
        <span className="text-sm uppercase text-gray-400">Users</span>
        <div className="flex items-center justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
            Manage users
          </h2>
          <CreateUsers />
          {/* <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
          Check our work
        </button> */}
        </div>
      </div>
      <div className="p-12">
        <CommonTable />
      </div>
    </>
  );
};

export default UsersPage;
