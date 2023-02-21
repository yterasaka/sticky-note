import { useState } from "react";
import styled from "styled-components";

import { ModalDeleteMemo } from "./ModalDeleteMemo";
import { ModalNewMemo } from "./ModalNewMemo";
import { media, colors } from "../utils/constants";

// CSS
export const CloseButton = styled.button`
  text-align: right;
  margin-right: -10px;
  background: none;
  border: none;
  color: ${colors.lightgray};
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }

  ${media.tablet`
    margin-top: 10px;
    `}
`;

export const ModalView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = ({
  filter,
  setFilter,
  memos,
  setMemos,
  isShow,
  setIsShow,
}) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!text) return;
    const newMemo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };

    setMemos([newMemo, ...memos]);
    localStorage.setItem("Memos", JSON.stringify([newMemo, ...memos]));
    setText("");
    setIsShow(false);
    setFilter("all");
  };

  const closeModal = () => {
    setIsShow(false);
    setText("");
  };

  const openModal = () => {
    setIsShow(true);
  };

  const handleOnRemove = () => {
    const allNotes = memos.filter((memo) => memo.removed === false);
    setMemos(allNotes);
    localStorage.setItem("Memos", JSON.stringify(allNotes));
    setIsShow(false);
    setFilter("all");
  };

  return (
    <div>
      {filter === "trash" ? (
        <ModalDeleteMemo
          openModal={openModal}
          isShow={isShow}
          closeModal={closeModal}
          handleOnRemove={handleOnRemove}
        />
      ) : (
        <ModalNewMemo
          text={text}
          openModal={openModal}
          isShow={isShow}
          closeModal={closeModal}
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
        />
      )}
    </div>
  );
};
