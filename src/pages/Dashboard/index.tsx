import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Main from "./main";

const Dashboard = () => {
  return (
    <main className="w-screen">
      <Header />
      <section className="flex w-full">
        <SideBar />
        <Main />
      </section>
    </main>
  );
};

export default Dashboard;
