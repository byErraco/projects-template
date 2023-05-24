import React from "react";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <div className="flex  flex-row">
        <header className="flex w-full h-18  gap-x-6 items-center border-b border-black px-2 bg-white">
          Made with ❤️
        </header>
        <div className="flex gap-x-6 px-2 h-18 w-[300px] border-l border-b border-black items-center bg-white">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
      {/* <aside className="h-18 w-[300px] border-b border-black bg-white"></aside> */}
    </>
  );
};

export default Navbar;
