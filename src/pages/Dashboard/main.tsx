import React, { useState } from "react";
import { cardData } from "../../utils/constants";
import { cardAssets } from "../../assets";
import Server from "../../components/Server";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleToogleModal = () =>{
    setModalVisible(!modalVisible)
  }
  return (
    <section className="bg-background-input w-full lg:w-[81.5%] flex flex-col px-5 py-7 gap-6">
      {modalVisible === false ? (
        <>
          <section className="flex justify-between gap-5">
            {cardData.map((cardItem, index) => (
              <Card
                header={cardItem.header}
                body={cardItem.body}
                icon={cardAssets[index]}
                onclick={() => console.log("home")}
              />
            ))}
          </section>
          <h2 className="text-2xl text-text-header font-inter">
            VPN Servers List
          </h2>
          <section className="flex flex-col gap-5">
            <Server icon={cardAssets[0]} country="Netherlands" />
            <Server icon={cardAssets[0]} country="Netherlands" />
            <Server icon={cardAssets[0]} country="Netherlands" />
            <Server icon={cardAssets[0]} country="Netherlands" />
            <Server icon={cardAssets[0]} country="Netherlands" />
          </section>
        </>
      ) : (
        <Modal  toogleModal={handleToogleModal}/>
      )}
    </section>
  );
};

export default Main;
