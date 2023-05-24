import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as PowerIcon } from "../../icons/power.svg";
import { ReactComponent as UsersIcon } from "../../icons/users.svg";
import { ReactComponent as InfoIcon } from "../../icons/info.svg";
import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import CustomTooltip from "../common/tooltip/CustomTooltip";
import { useState } from "react";

const navigation = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];
const Sidebar = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("second");

  return (
    <aside className=" flex flex-col items-center w-18 h-screen border-r border-black bg-white">
      <div className="flex h-18 w-full items-center justify-center border-b border-black">
        A
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <NavLink
          to={"/dash"}
          end
          className={({ isActive }) =>
            isActive
              ? " group relative rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-200"
              : " group relative rounded-xl  p-2 text-black hover:bg-gray-200"
          }
        >
          <HomeIcon className="h-6 w-6 stroke-current" />
          <CustomTooltip>Home</CustomTooltip>
        </NavLink>

        <NavLink
          to={"/dash/users"}
          end
          className={({ isActive }) =>
            isActive
              ? " group relative rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-200"
              : " group relative rounded-xl  p-2 text-black hover:bg-gray-200"
          }
          // className="group relative rounded-xl  p-2 text-black hover:bg-gray-200"
        >
          <UsersIcon className="h-6 w-6 stroke-current" />
          <CustomTooltip>Users</CustomTooltip>
        </NavLink>
        <NavLink
          to={"/dash/emails"}
          end
          className={({ isActive }) =>
            isActive
              ? " group relative rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-200"
              : " group relative rounded-xl  p-2 text-black hover:bg-gray-200"
          }
          // className="group relative rounded-xl  p-2 text-black hover:bg-gray-200"
        >
          <EmailIcon className="h-6 w-6 stroke-current" />
          <CustomTooltip>Emails</CustomTooltip>
        </NavLink>
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-4">
        <a
          href="#"
          className=" group relative rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-200"
        >
          <InfoIcon className="h-6 w-6 stroke-current" />
          <CustomTooltip>Info</CustomTooltip>
        </a>
        <button
          className=" group cursor-pointer relative rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-200"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <PowerIcon className="h-6 w-6 stroke-current" />
          <CustomTooltip>Logout</CustomTooltip>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
