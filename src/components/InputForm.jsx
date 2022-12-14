import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: 1rem;
  text-align: center;
  height: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const MemoArea = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 80%;
`

const MemoItem = styled.li`
  list-style: none;
`

export const InputForm = () => {
  const [text, setText] = useState("");
  const [memos, setMemos] = useState([]);

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
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Enter Memo"
          onChange={(e) => handleOnChange(e)}
        />
        <input type="submit" value="Add" onSubmit={handleOnSubmit} />
      </Form>

      <MemoArea>
        {memos.map((memo) => {
          return (
            <MemoItem key={memo.id}>
              <input
                type="checkbox"
                disabled={memo.removed}
                checked={memo.checked}
                onChange={() => handleOnMemo(memo, "checked", !memo.checked)}
              />
              <input
                type="text"
                disabled={memo.checked || memo.removed}
                value={memo.value}
                onChange={(e) => handleOnMemo(memo, "value", e.target.value)}
              />
              <button
                onClick={() => handleOnMemo(memo, "removed", !memo.removed)}
              >
                {memo.removed ? "Restore" : "Remove"}
              </button>
            </MemoItem>
          );
        })}
      </MemoArea>
    </Container>
  );
};
