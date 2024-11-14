import { del, edit } from "../../assets";
import Button from "../Button";

type ServerProps = {
  icon: string;
  country: string;
  handleDelete: () => void;
  handleUpdate: () => void;
};

const Server = ({ icon, country,handleDelete,handleUpdate }: ServerProps) => {
  return (
    <section className="flex bg-white h-20 rounded-3xl items-center justify-between px-4 ">
      <div className="flex flex-row gap-4 h-full items-center">
        <img src={icon} alt="server Image" className="w-14 h-14" />
        <div className="">
          <h4 className="text-xs md:text-base font-inter font-bold">
            {country}
          </h4>
          <p className="font-inter font-light text-sm text-text-body">
            VPN server
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col ">
        <h4 className="text-base font-inter font-bold">Lorem ipsum</h4>
        <p className="font-inter font-light text-sm text-text-body">
          Many publishing
        </p>
      </div>
      <div className="hidden md:flex flex-col">
        <h4 className="text-base font-inter font-bold">Lorem ipsum</h4>
        <p className="font-inter font-light text-sm text-text-body">
          Many publishing
        </p>
      </div>
      <div className=" sm:w-3/5 md:w-2/6 hidden sm:flex justify-between gap-5">
        <Button label="Update" onclick={handleUpdate} />
        <Button label="Delete" onclick={handleDelete} />
      </div>
      <div className="sm:hidden flex gap-5">
        <button onClick={handleUpdate}>
          <img src={edit} alt="edit" />
        </button>
        <button onClick={handleDelete}>
          <img src={del} alt="delete" />
        </button>
      </div>
    </section>
  );
};

export default Server;
