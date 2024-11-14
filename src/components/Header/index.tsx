import React from "react";
import { logo, notification, profile_image, search, settings } from "../../assets";

const Header = () => {
  return (
    <section className="flex h-20 items-center">
        <section className="pl-8 flex flex-row gap-4 border-r w-1/5 h-full items-center">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <h1 className="text-2xl text-text-header font-extrabold font-mont">PARA DASH</h1>
      </section>
      <section className="flex flex-row w-4/5 justify-between float-right px-7 items-center">
        <p className="text-2xl text-text-header font-semibold font-inter">Services</p>
        <div className="flex w-3/5 gap-5 justify-end">
          <div className="flex flex-row bg-background-input rounded-3xl w-64 h-10 pl-4 items-center gap-2 ">
            <img src={search} alt="search " className="w-4 h-4" />
            <p className="text-xs font-normal font-inter" style={{ color: "#8BA3CB" }}>
              Search for something
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex bg-background-input h-10 w-10 justify-center items-center rounded-full">
              <img src={settings} alt="settings" className="" />
            </div>
            <div className="flex bg-background-input h-10 w-10 justify-center items-center rounded-full">
              <img src={notification} alt="notification" />
            </div>
            <img
              src={profile_image}
              alt="profile image"
              className="w-11 h-11 pl-1"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
