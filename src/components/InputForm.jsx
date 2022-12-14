import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    margin: 1rem;
    text-align: center;
    height: 2rem;
`;

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

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSubmit();
      }}
    >
      <input type="text" value={text} placeholder="Enter Memo" onChange={(e) => handleOnChange(e)} />
      <input type="submit" value="Add" onSubmit={handleOnSubmit} />
    </Form>
  );
};
