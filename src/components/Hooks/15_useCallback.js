import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";

// useCallback : 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줌.
function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <Button onClick={toggle}>
      {room} {on ? "💡" : "⚫"}
    </Button>
  );
}

// 해당 prop이 변경되지 않는 한 다시 호출되지 않음
// 안 해주면 하나만 동작 시켜도 3개의 컴포넌츠 모두 동작
Light = React.memo(Light); 

export default function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  // const toggleMaster = () => setMasterOn(!masterOn);
  // const toggleKitchen = () => setKitchenOn(!kitchenOn);
  // const toggleBath = () => setBathOn(!bathOn);

  // 함수의 참조값이 SmartHome 컴포넌트가 랜더링될 때마다 새로운 참조값으로 모두 바뀌어버리기 때문에 
  // useCallback()의 두번쨰 인자로 넘어온 의존 배열이 변경될 대만 첫 번째 인자로 넘어온 함수 호출
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <div>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}
