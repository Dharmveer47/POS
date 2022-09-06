import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsFilesAlt } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "../Button";
import { PosThem } from "../Thems";
import { PosNavClose } from "./Calculator";
export const FileIcon = () => {
  const [toggleDraft, setToggleDraft] = useState(false);
  return (
    <>
      <div className="pos__file_icon" onClick={() => setToggleDraft((e) => !e)}>
        <Button bName={<BsFilesAlt />} bg="#FFC107" />
        <div className="pos__file_icon_alert">0</div>
      </div>
      {toggleDraft && <DraftCart setToggleDraft={setToggleDraft} />}
    </>
  );
};

const DraftCart = ({ setToggleDraft }) => {
  return (
    <PosThem className="pos__fileIcon">
      <PosNavClose
        name={"Draft Orders"}
        onClick={() => setToggleDraft((e) => !e)}
      />
      <div className="pos__fileIcon_container">
        <PosSingelCard />
      </div>
    </PosThem>
  );
};

const PosSingelCard = () => {
  return (
    <PosThem className="pos__draft_oreder">
      <div className="pos__fileIcon_card">
        <h1>Order 1</h1>
        <p>Customer Name:</p>
        <p>Payment Status: Pending</p>
        <p>Total Iteam 2</p>
        <p>Amout to Pay 645</p>
      </div>
      <div className="pos__fileIcon_edited">
        <BiEdit />
        <AiFillDelete />
      </div>
    </PosThem>
  );
};
