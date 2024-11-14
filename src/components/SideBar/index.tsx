import React from "react";
import { dashboard} from "../../assets";
import SidebarItem from "../SideBarItem";

const SideBar = () => {
  return (
    <section className="border-r w-1/5 h-screen">
      <section>
        <SidebarItem itemName="Dashboard" image={dashboard} />
      </section>
    </section>
  );
};

export default SideBar;
