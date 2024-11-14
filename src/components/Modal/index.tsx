import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useMutation } from "@tanstack/react-query";
import { addServer, updateServer } from "../../api/api";
import { ServerType } from "../../types/api";

type ModalProps = {
  toogleModal: () => void;
  server: ServerType;
};

const Modal = ({ toogleModal, server }: ModalProps) => {
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<string | unknown>();
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (server._id) {
      setValue(server.country);
      setPreview(`http://localhost:8000/${server.countryImage}`);
      setFile(server.countryImage.replace(/\d+/g, "").split("/")[1]);
    }
  }, []);

  const addServerMutation = useMutation({
    mutationFn: addServer,
  });

  const updateServerMutation = useMutation({
    mutationFn: updateServer,
  });

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setPreview(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0] as unknown);
    }
  };
  const handleButtonPress = () => {
    if (server._id) {
      const data = new FormData();
      data.append("country", value);
      data.append("image", file as string);
      updateServerMutation.mutate({ id: server._id, data: data });
    } else {
      const data = new FormData();
      data.append("country", value);
      data.append("image", file as string);
      addServerMutation.mutate(data);
    }
    toogleModal();
  };
  return (
    <section className="bg-white  rounded-3xl p-8 gap-12 flex flex-col">
      <div className="flex flex-col w-24 items-center gap-1">
        <h1 className=" text-text-blue font-normal font-inter">
          {server ? "Edit server" : "Add server"}
        </h1>
        <div className="w-24 h-1 bg-text-blue rounded-t-md"></div>
      </div>
      <div className="flex gap-12 flex-col md:flex-row">
        <Input
          placeholder="Image"
          label="Server Image"
          value={preview}
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
        <Button label="Save" onclick={handleButtonPress} />
      </div>
    </section>
  );
};

export default Modal;
