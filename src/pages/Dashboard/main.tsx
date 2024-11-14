import { useState } from "react";
import { cardData } from "../../utils/constants";
import { cardAssets } from "../../assets";
import Server from "../../components/Server";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import { useQuery, useMutation } from "@tanstack/react-query";
import { deleteServer, getServer } from "../../api/api";
import { ServerType } from "../../types/api";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [server, setServer] = useState<ServerType|"">({
    country: "",
    countryImage: "",
    _id: "",
  });

  const { data } = useQuery({
    queryKey: ["get_servers"],
    queryFn: getServer,
  });
  const deleteServerMutation = useMutation({
    mutationFn: deleteServer,
    mutationKey: ["deleteServer"],
  });

  const handleDeleteServer = (id: string) => {
    console.log(id);
    deleteServerMutation.mutate(id);
  };
  const handleToogleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleAddServer = () => {
    setModalVisible(true);
    setServer("");
  };
  const handleupdateServer = (server: ServerType) => {
    setModalVisible(true);
    setServer(server);
  };

  return (
    <section className="bg-background-input w-full lg:w-[81.5%] flex flex-col px-5 py-7 gap-6">
      {modalVisible === false ? (
        <>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <Card
              header={cardData[0]["header"]}
              body={cardData[0]["body"]}
              icon={cardAssets["0"]}
              onclick={handleAddServer}
            />
            <Card
              header={cardData[1]["header"]}
              body={cardData[1]["body"]}
              icon={cardAssets["1"]}
            />
            <Card
              header={cardData[2]["header"]}
              body={cardData[2]["body"]}
              icon={cardAssets["2"]}
            />
          </section>
          <h2 className="text-2xl text-text-header font-inter">
            VPN Servers List
          </h2>
          <section className="flex flex-col gap-5">
            {data &&
              data.servers.map((server: ServerType) => (
                <Server
                  icon={`http://localhost:8000/${server.countryImage}`}
                  country={server.country}
                  key={server._id}
                  handleDelete={() => handleDeleteServer(server._id)}
                  handleUpdate={() => handleupdateServer(server)}
                />
              ))}
          </section>
        </>
      ) : (
        <Modal toogleModal={handleToogleModal} server={server as ServerType} />
      )}
    </section>
  );
};

export default Main;
