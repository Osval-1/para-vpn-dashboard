import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

type ModalProps = {
  toogleModal: () => void;
};
const Modal = ({ toogleModal }: ModalProps) => {
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<string>("");
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  };
  return (
    <section
      className="bg-white  rounded-3xl p-8 gap-12 flex flex-col"
    >
      <div className="flex flex-col w-24 items-center gap-1">
        <h1 className=" text-text-blue font-normal font-inter">Edit server</h1>
        <div className="w-24 h-1 bg-text-blue rounded-t-md"></div>
      </div>
      <div className="flex gap-12 flex-col md:flex-row">
        <Input
          placeholder="Image"
          label="Server Image"
          value={file}
          type="file"
          onchange={handleInputFileChange}
        />
        <Input
          placeholder="Email"
          label="Country Name"
          value={value}
          type="text"
          onchange={handleInputTextChange}
        />
      </div>
      <div className="flex gap-4">
        <Button label="Back" onclick={toogleModal} />
        <Button label="Save" onclick={() => console.log("here")} />
      </div>
    </section>
  );
};

export default Modal;
