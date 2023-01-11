import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BsTrash,
  BsFillStarFill,
  BsStar,
  BsArrowCounterclockwise,
} from "react-icons/bs";

import { Header } from "./components/Header";
import SlideMenu from "./components/SlideMenu";

const App = () => {
  const [text, setText] = useState("");
  const [memos, setMemos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredMemos, setFilteredMemos] = useState([]);

  useEffect(() => {
    localStorage.setItem("Memos", JSON.stringify(memos));
  }, [memos]);

  useEffect(() => {
    const memos = JSON.parse(localStorage.getItem("Memos"));
    if (memos) {
      setMemos(memos);
    }
  }, []);

  useEffect(() => {
    const filteringMemos = () => {
      switch (filter) {
        case "trash":
          setFilteredMemos(memos.filter((memo) => memo.removed === true));
          break;
        case "star":
          setFilteredMemos(memos.filter((memo) => memo.checked === true));
          break;
        default:
          setFilteredMemos(memos);
      }
    };
    filteringMemos();
  }, [filter, memos]);

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
  };

  const handleOnMemo = (obj, key, value) => {
    const deepCopy = memos.map((memo) => ({ ...memo }));
    const newMemos = deepCopy.map((memo) => {
      if (memo.id === obj.id) {
        memo[key] = value;
      }
      return memo;
    });
    setMemos(newMemos);
  };

  return (
    <Container>
      <Header />
      <SlideMenu setFilter={setFilter} />

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
        {filteredMemos.map((memo) => {
          return (
            <MemoItem key={memo.id}>
              <MemoText
                type="text"
                disabled={memo.removed}
                value={memo.value}
                onChange={(e) => handleOnMemo(memo, "value", e.target.value)}
              />
              <MemoButton>
                <MemoCheck
                  onClick={() => handleOnMemo(memo, "checked", !memo.checked)}
                >
                  {memo.checked ? <BsFillStarFill /> : <BsStar />}
                </MemoCheck>
                <MemoTrash
                  onClick={() => handleOnMemo(memo, "removed", !memo.removed)}
                >
                  {memo.removed ? <BsArrowCounterclockwise /> : <BsTrash />}
                </MemoTrash>
              </MemoButton>
            </MemoItem>
          );
        })}
      </MemoArea>
    </Container>
  );
};

export default App;

// CSS
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
  border-radius: 5px;
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

const MemoCheck = styled.button`
  background-color: beige;
  border: none;
  border-radius: 3px;
  color: #276d9b;
  width: 30px;
  padding: 2px;
  font-size: 1rem;
  &:checked {
    color: red;
  }
`;

const MemoTrash = styled.button`
  background-color: beige;
  border: none;
  border-radius: 3px;
  color: #711423;
  width: 30px;
  padding: 2px;
  font-size: 1rem;
`;
