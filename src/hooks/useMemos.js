import { useState } from "react";


const useMemos = () => {
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

  //test
  // console.log(memos);

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

  return {
    text,
    memos,
    handleOnChange,
    handleOnSubmit,
    handleOnMemo,
  };
};

export default useMemos;
