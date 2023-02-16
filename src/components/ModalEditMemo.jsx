import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { ModalView, CloseButton } from "./Modal";
import { media } from "../utils/constants";

// CSS
const EditArea = styled.div`
  margin: 1rem;
  text-align: center;
  height: rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  border-radius: 10px;

  ${media.tablet`
    margin: 0;
    height: 100%;
    width: 100%;
    `}
`;
const TextInput = styled.textarea`
  height: 300px;
  width: 400px;
  outline: none;
  margin-bottom: 5px;
  resize: none;
  border: none;
  font-size: 16px;

  ${media.tablet`
    margin: 20px auto;
    height: 80%;
    width 80%;
    font-size: 1rem;
    `}

  ${media.phone`
    height: 80%;
    width: 90%;
    `}
`;

const ApplyButton = styled.button`
  width: 100px;
  padding: 3px;
  margin: 0 auto;
  background-color: lightblue;
  border: none;
  box-shadow: 0px 3px #bfbfbf;
  border-radius: 50px;
  color: #373a47;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

export const ModalEditMemo = ({
  memos,
  setMemos,
  editMemo,
  setEditMemo,
  closeModalEdit,
}) => {

  const handleOnEditMemo = (key, value) => {
    let deepCopy = { ...editMemo };
    deepCopy[key] = value;
    setEditMemo(deepCopy);
  };

  const handleOnApply = () => {
    const deepCopy = memos.map((memo) => ({ ...memo }));
    const newMemos = deepCopy.map((memo) => {
      if (memo.id === editMemo.id) {
        memo.value = editMemo.value;
      }
      return memo;
    });
    setMemos(newMemos);
    localStorage.setItem("Memos", JSON.stringify(newMemos));
  }

  return (
    <ModalView>
      <EditArea>
        <CloseButton onClick={closeModalEdit}>
          <BsX />
        </CloseButton>
        <TextInput
          type="text"
          value={editMemo.value}
          onChange={(e) => handleOnEditMemo("value", e.target.value)}
          autoFocus={true}
        />
        <ApplyButton onClick={() => {handleOnApply(); closeModalEdit();}}>Apply</ApplyButton>
      </EditArea>
    </ModalView>
  );
};
