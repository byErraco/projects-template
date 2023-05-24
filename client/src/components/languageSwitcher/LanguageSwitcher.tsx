import React, { useState } from "react";
import { Select, Image } from "antd";
const { Option } = Select;

const LANGUAGES = [
  {
    value: "eng",
    label: "English",
    img: "https://ui.mantine.dev/_next/static/media/english.dcb5bb2b.png",
  },
  {
    value: "gr",
    label: "German",
    img: "https://ui.mantine.dev/_next/static/media/german.4beb0c8c.png",
  },
];

const LanguageSwitcher: React.FC = () => {
  const [lang, setLang] = useState(LANGUAGES[0]);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue="eng"
      className="w-auto"
      //   style={{ width: 120 }}
      onChange={handleChange}
      //   options={LANGUAGES}
    >
      {LANGUAGES.map((el) => (
        <Option key={el.value} value={el.value}>
          <div className="flex flex-row gap-5 justify-center align-middle items-center">
            {el.label}{" "}
            <img
              className="object-cover w-[1.375rem] h-[1.375rem] rounded"
              src={el.img}
            />
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
