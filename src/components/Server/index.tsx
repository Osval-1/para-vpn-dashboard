import React from "react";
import Button from "../Button";

type ServerProps={
    icon:string;
    country:string;
}

const Server = ({icon,country}:ServerProps) => {
  return (
    <section className="flex bg-white h-20 rounded-3xl items-center px-4 gap-20">
      <div className="flex flex-row gap-4 h-full items-center">
        <img src={icon} alt="server Image" className="w-14 h-14" />
        <div className="">
          <h4 className="text-base font-inter font-bold">{country}</h4>
          <p className="font-inter font-light text-sm text-text-body">
           VPN server
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-base font-inter font-bold">Lorem ipsum</h4>
        <p className="font-inter font-light text-sm text-text-body">
          Many publishing
        </p>
      </div>
      <div className="">
        <h4 className="text-base font-inter font-bold">Lorem ipsum</h4>
        <p className="font-inter font-light text-sm text-text-body">
          Many publishing
        </p>
      </div>
      <Button label="Update" onclick={() => console.log("hello")} />
      <Button label="Delete" onclick={() => console.log("hello")} />
    </section>
  );
};

export default Server;
