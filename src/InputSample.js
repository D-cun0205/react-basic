import React, { useState, useRef } from "react";

function InputSample() {
  // 객체 수정할 때 inputs[name] = '수정' 처럼 객체를 직접 참조하여 변경하면 안됨
  // 새로운 객체를 만들어서(객체 복사) 새로운 객체에 변화를 주고 이를 상태로 사용해야 함
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs;

  const nameInput = useRef();

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>reset</button>
      <div>
        <b>value: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
