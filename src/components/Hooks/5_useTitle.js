import React, { useState, useEffect } from 'react';

function HookUseTitle() {

  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      if (htmlTitle) {
        htmlTitle.innerHTML = title;
      }
    }
    useEffect(updateTitle, [title])
    return setTitle
  }

  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Home"), 2500)

  return (
    <div>
      <h2>hello</h2>
    </div>
  )
}

export default HookUseTitle;
