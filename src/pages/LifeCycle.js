import React, { useState } from "react";
import LifeCycleFC from "../funcs/LifeCycleFC";

// 랜덤 색상을 생성합니다
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function LifeCycle() {
  const [color, setColor] = useState("#000000");
  const [visible, setVisible] = useState(true);

  const onClick = () => {
    setColor(getRandomColor());
  };

  const onToggle = () => {
    setVisible(!visible);
  };

  return (
      <div>
        <button className="btn" onClick={onClick}>랜덤 색상</button>
        <button className="btn" onClick={onToggle}>토글</button>
        {visible && <LifeCycleFC color={color} />}
      </div>
  );
}

export default LifeCycle
