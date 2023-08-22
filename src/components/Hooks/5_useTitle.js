import React, { useState, useEffect } from 'react';

function HookUseTitle() {

  // typescript : const useTitle = (initialTitle: string) => {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
      const htmlTitle = document.querySelector("title"); // <title> 요소 선택
      if (htmlTitle) {
        htmlTitle.innerHTML = title;
      }
    }
    useEffect(updateTitle, [title]) // title 값이 바뀔 때 updateTitle() 실행
    return setTitle
  }

  const titleUpdater = useTitle("Loading...") // 처음 useState의 초기값 할당, setTitle 함수 반환
  setTimeout(() => titleUpdater("Home"), 2500) // 반환된 setTitle 함수를 통해 2.5초 후 useState 값 변경

  return (
    <div>
      <h2>hello</h2>
    </div>
  )

}

export default HookUseTitle;
