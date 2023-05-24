import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch, Space } from "antd";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher: React.FC = () => (
  <Switch
    checkedChildren={<SunIcon className="h-3 w-3" />}
    unCheckedChildren={<MoonIcon className="h-3 w-3" />}
    defaultChecked
  />
);

export default ThemeSwitcher;
