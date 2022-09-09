// call react library
import React from "react";

// 비구조화 할당 (객체) -> ({변수 바로 접근})
function Hello({ name, color, isSpecial }) {
  return (
    <>
      <div style={{ color }}>
        {isSpecial && <b> * </b>} 안녕하세요. {name}
      </div>
    </>
  );
}

Hello.defaultProps = {
  name: "이름없음"
};

// hello 컴포넌트를 내보내어 다른 컴포넌트에서 불러와서 사용할 수 있도록 함
export default Hello;
