import styled from "styled-components";
import { BsPencilFill, BsFillXCircleFill } from "react-icons/bs";
import { ModalView, CloseButton } from "./Modal";

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
  background-color: #6495ed;
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
      <ModalButtonB onClick={openModal}>
        <BsPencilFill />
      </ModalButtonB>
      {isShow && (
        <ModalView>
          <CloseButton onClick={closeModal}>
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
            <AddButton type="submit" value="Add" onSubmit={handleOnSubmit} />
          </Form>
        </ModalView>
      )}
    </div>
  );
};
