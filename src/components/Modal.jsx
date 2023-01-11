import { useState } from "react";
import styled from "styled-components";
import { BsPencilFill, BsTrashFill, BsFillXCircleFill } from "react-icons/bs";

export const Modal = ({ filter, memos, setMemos, show, setShow }) => {
  const [text, setText] = useState("");
  //   const [trash, setTrash] = useState([]);

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
    setText("");
    setShow(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const handleOnRemove = () => {
    //   console.log(memos)
    //   setTrash(memos.filter((memo) => memo.removed === false))
    //   console.log(trash)
    //   setMemos(trash);
    //   setShow(false);
    //   console.log(memos)
  };

  return (
    <>
      {filter === "trash" ? (
        <>
          <ModalButtonA onClick={(e) => openModal()}>
            <BsTrashFill />
          </ModalButtonA>
          {show ? (
            <ModalView>
              <CloseButton onClick={() => closeModal()}>
                <BsFillXCircleFill />
              </CloseButton>
              <DeleteMessage>
                <Message>Empty the trash?</Message>
                <DeleteButton onClick={() => handleOnRemove()}>
                  Delete
                </DeleteButton>
              </DeleteMessage>
            </ModalView>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <ModalButtonB onClick={() => openModal()}>
            <BsPencilFill />
          </ModalButtonB>
          {show ? (
            <ModalView>
              <CloseButton onClick={() => closeModal()}>
                <BsFillXCircleFill />
              </CloseButton>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOnSubmit();
                }}
              >
                <TextInput
                  type="text"
                  value={text}
                  placeholder="Enter Memo"
                  onChange={(e) => handleOnChange(e)}
                />
                <AddButton
                  type="submit"
                  value="Add"
                  onSubmit={handleOnSubmit}
                />
              </Form>
            </ModalView>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

// CSS
const Form = styled.form`
  margin: 1rem;
  text-align: center;
  height: rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
`;

const TextInput = styled.textarea`
  height: 150px;
  width: 300px;
  outline: none;
  margin-bottom: 5px;
  resize: none;
  border: none;
`;

const AddButton = styled.input`
  width: 100px;
  padding: 3px;
  margin: 0 auto;
  background-color: lightblue;
  border: none;
  box-shadow: 0px 3px #bfbfbf;
  border-radius: 50px;
  color: #373a47;
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 100px;
  right: 50px;
  background: none;
  border: none;
  color: lightgray;
  font-size: 1.5rem;
`;

const DeleteMessage = styled.div`
  margin: 1rem;
  text-align: center;
  height: rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
`;

const Message = styled.div`
  padding: 30px 15px 40px;
`;

const DeleteButton = styled.button`
  width: 100px;
  padding: 3px;
  margin: 0 auto;
  background-color: #ffb6c1;
  border: none;
  box-shadow: 0px 3px #bfbfbf;
  border-radius: 50px;
  color: #373a47;
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

const ModalButtonA = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50px;
  padding-top: 3px;
  border: none;
  width: 40px;
  height: 40px;
  background-color: #cd5c5c;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    opacity: 0.7;
  }
`;

const ModalButtonB = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50px;
  padding-top: 3px;
  border: none;
  width: 40px;
  height: 40px;
  background-color: #6495ed;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    opacity: 0.7;
  }
`;

const ModalView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
