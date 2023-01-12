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
import { Modal } from "./components/Modal";

const App = () => {
  const [memos, setMemos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredMemos, setFilteredMemos] = useState([]);
  const [show, setShow] = useState(false);

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
        case "all":
          setFilteredMemos(memos.filter((memo) => memo.removed === false));
          break;
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
      <Header disabled={show}/>
      <SlideMenu setFilter={setFilter} />
      <Modal
        filter={filter}
        memos={memos}
        setMemos={setMemos}
        show={show}
        setShow={setShow}
      />

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
                  disabled={memo.removed}
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
