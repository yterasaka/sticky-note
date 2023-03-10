import styled from "styled-components";
import { BsPencilFill, BsX } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { ModalView, CloseButton } from "./Modal";
import { media, colors } from "../utils/constants";

// CSS
const ModalButtonB = styled.button`
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
  background-color: ${colors.cornflowerblue};
  -webkit-appearance: none;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
const Form = styled.form`
  margin: 1rem;
  text-align: center;
  height: rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  border-radius: 10px;

  ${media.tablet`
    margin: 0;
    height: 100%;
    width 100%;
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
    width: 80%;
    `}

  ${media.phone`
    height: 80%;
    width: 90%;
    `}
`;

const AddButton = styled.input`
  width: 100px;
  padding: 3px;
  margin: 0 auto;
  background-color: ${colors.cornflowerblue};
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

export const ModalNewMemo = ({
  text,
  openModal,
  isShow,
  closeModal,
  handleOnSubmit,
  handleOnChange,
}) => {
  return (
    <div>
      <ModalButtonB
        id="createTip"
        data-tooltip-content="Create a new note"
        onClick={openModal}
      >
        <BsPencilFill />
      </ModalButtonB>
      <Tooltip anchorId="createTip" />
      {isShow && (
        <ModalView>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit();
            }}
          >
            <CloseButton onClick={closeModal}>
              <BsX />
            </CloseButton>
            <TextInput
              type="text"
              value={text}
              placeholder="Enter Memo"
              onChange={(e) => handleOnChange(e)}
              autoFocus={true}
            />
            <AddButton type="submit" value="Add" onSubmit={handleOnSubmit} />
          </Form>
        </ModalView>
      )}
    </div>
  );
};
