import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BsTrash,
  BsFillStarFill,
  BsStar,
  BsArrowCounterclockwise,
} from "react-icons/bs";

import { Header } from "./components/Header";
import { Modal } from "./components/Modal";

// CSS
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
  padding: 0;
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

const App = () => {
  const [memos, setMemos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredMemos, setFilteredMemos] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const memos = JSON.parse(localStorage.getItem("Memos"));
    if (memos) {
      setMemos(memos);
    }
  }, []);

  useEffect(() => {
    const filteringMemos = () => {
      switch (filter) {
        case "all":
          setFilteredMemos(memos.filter((memo) => memo.removed === false));
          break;
        case "trash":
          setFilteredMemos(memos.filter((memo) => memo.removed === true));
          break;
        case "star":
          setFilteredMemos(
            memos.filter(
              (memo) => memo.checked === true && memo.removed === false
            )
          );
          break;
        default:
          setFilteredMemos(memos);
      }
    };
    filteringMemos();
  }, [filter, memos]);

  const handleOnEdit = (obj, key, value) => {
    const deepCopy = memos.map((memo) => ({ ...memo }));
    const newMemos = deepCopy.map((memo) => {
      if (memo.id === obj.id) {
        memo[key] = value;
      }
      return memo;
    });
    setMemos(newMemos);
    localStorage.setItem("Memos", JSON.stringify(newMemos));
  };

  return (
    <Container>
      <Header disabled={isShow} filter={filter} setFilter={setFilter} />
      <Modal
        filter={filter}
        setFilter={setFilter}
        memos={memos}
        setMemos={setMemos}
        isShow={isShow}
        setIsShow={setIsShow}
      />

      <MemoArea>
        {filteredMemos.map((memo) => {
          return (
            <MemoItem key={memo.id}>
              <MemoText
                type="text"
                disabled
                // disabled={memo.removed}
                value={memo.value}
                onChange={(e) => handleOnEdit(memo, "value", e.target.value)}
                onClick={() => console.log("test")}
              />
              <MemoButton>
                <MemoCheck
                  disabled={memo.removed}
                  onClick={() => handleOnEdit(memo, "checked", !memo.checked)}
                >
                  {memo.checked ? <BsFillStarFill /> : <BsStar />}
                </MemoCheck>
                <MemoTrash
                  onClick={() => handleOnEdit(memo, "removed", !memo.removed)}
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
