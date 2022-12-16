import styled from "styled-components";
import useMemos from "../hooks/useMemos";
import { BsTrash, BsFillStarFill } from "react-icons/bs";

const Form = styled.form`
  margin: 1rem;
  text-align: center;
  height: rem;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.textarea`
  height: 100px;
  width: 300px;
  outline: none;
  margin-bottom: 5px;
  resize: none;
`;
const AddButton = styled.input`
  width: 100px;
  margin: 0 auto;
  background-color: lightblue;
  border: 1px solid;
  box-shadow: 0px 3px #bfbfbf;
  border-radius: 50px;
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const MemoArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

const MemoItem = styled.li`
  list-style: none;
  border: 1px solid;
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 15px;
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

const MemoText = styled.textarea`
  outline: none;
  resize: none;
  border: none;
  background-color: beige;
  height: 100%;
`;

const MemoButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MemoTrash = styled.button`
  background-color: beige;
  border: none;
  border-radius: 3px;
  color: darkblue;
  width: 30px;
  padding: 2px;
  font-size: 1rem;
`;

export const Editor = () => {
  const { text, memos, handleOnChange, handleOnSubmit, handleOnMemo } =
    useMemos();

  return (
    <Container>
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

      <MemoArea>
        {memos.map((memo) => {
          return (
            <MemoItem key={memo.id}>
              <MemoText
                type="text"
                disabled={memo.checked || memo.removed}
                value={memo.value}
                onChange={(e) => handleOnMemo(memo, "value", e.target.value)}
              />
              <MemoButton>
                <input
                  type="checkbox"
                  disabled={memo.removed}
                  checked={memo.checked}
                  onChange={() => handleOnMemo(memo, "checked", !memo.checked)}
                />
                <MemoTrash
                  onClick={() => handleOnMemo(memo, "removed", !memo.removed)}
                >
                  {memo.removed ? <BsFillStarFill /> : <BsTrash />}
                </MemoTrash>
              </MemoButton>
            </MemoItem>
          );
        })}
      </MemoArea>
    </Container>
  );
};
