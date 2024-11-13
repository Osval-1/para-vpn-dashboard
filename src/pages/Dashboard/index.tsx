import React from "react";
import Button from "../../components/Button";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
  return (
    <div
      className="
    "
    >
      <Button label="View details" onclick={() => console.log("pressed")} />
        <SideBar/>
    </div>
  );
};

export default Dashboard;
