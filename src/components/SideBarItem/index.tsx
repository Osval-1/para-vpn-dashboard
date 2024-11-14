import React from "react";

type SideBarItemProps = {
  itemName: string;
  image: string;
};

const SidebarItem = ({ itemName, image }: SideBarItemProps) => {
  return (
    <section className="flex flex-row w-full pl-7 mt-8 gap-5 h-10 items-center" style={{
        borderLeft:"4px solid blue"
    }}>
      <img src={image} alt="sidebar item"className="w-5 h-5" />
      <p className="text-base text-text-grey font-inter">{itemName}</p>
    </section>
  );
};

export default SidebarItem;
