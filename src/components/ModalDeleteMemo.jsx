import styled from "styled-components";
import { BsTrashFill, BsX } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

import { ModalView, CloseButton } from "./Modal";
import { media, colors } from "../utils/constants";

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
  background-color: ${colors.indianred};
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
const DeleteMessage = styled.div`
  margin: 1rem;
  text-align: center;
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-size: 16px;

  ${media.tablet`
    margin: 0;
    height: 100%;
    width 100%;
    position: relative;
    `}
`;
const Message = styled.div`
  padding: 30px 15px 40px;

  ${media.tablet`
    padding-top: 300px;
    `}

  ${media.phone`
    padding-top: 200px;
  `}
`;
const DeleteButton = styled.button`
  width: 100px;
  padding: 3px;
  margin: 0 auto;
  background-color: ${colors.indianred};
  border: none;
  box-shadow: 0px 3px ${colors.lightgray};
  border-radius: 50px;
  color: white;
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
      <ModalButtonA
        id="emptyTip"
        data-tooltip-content="Empty trash"
        onClick={openModal}
      >
        <BsTrashFill />
      </ModalButtonA>
      <Tooltip anchorId="emptyTip" />
      {isShow && (
        <ModalView>
          <DeleteMessage>
            <CloseButton onClick={closeModal}>
              <BsX />
            </CloseButton>
            <Message>Empty the trash?</Message>
            <DeleteButton onClick={handleOnRemove}>Delete</DeleteButton>
          </DeleteMessage>
        </ModalView>
      )}
    </div>
  );
};
