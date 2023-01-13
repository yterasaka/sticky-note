import styled from "styled-components";
import { BsTrashFill, BsFillXCircleFill } from "react-icons/bs";
import { ModalView, CloseButton } from "./Modal";

// CSS
const ModalButtonA = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50px;
  padding-top: 3px;
  border: none;
  width: 40px;
  height: 40px;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  background-color: #cd5c5c;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

export const ModalDeleteMemo = ({
  openModal,
  isShow,
  closeModal,
  handleOnRemove,
}) => {
  return (
    <div>
      <ModalButtonA onClick={openModal}>
        <BsTrashFill />
      </ModalButtonA>
      {isShow && (
        <ModalView>
          <CloseButton onClick={closeModal}>
            <BsFillXCircleFill />
          </CloseButton>
          <DeleteMessage>
            <Message>Empty the trash?</Message>
            <DeleteButton onClick={handleOnRemove}>Delete</DeleteButton>
          </DeleteMessage>
        </ModalView>
      )}
    </div>
  );
};
