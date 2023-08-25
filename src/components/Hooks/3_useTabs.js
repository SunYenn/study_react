import React, { useState } from 'react';

function HookUseTabs() {

  const content = [
    {
      tab: "Section 1",
      content: "I'm the content of the Section 1"
    }, {
      tab: "Section 2",
      content: "I'm the content of the Section 2"
    }
  ];
  

  // typescript : const useTabs = (initialTab: number, allTabs : any[]) => {
  const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab)
    if(!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex // currentIndex를 업데이트하여 현재 선택된 탭을 변경하는 함수.
    }
  }

  const tabs = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        // typescript : <Button variant='info' onClick={() => tabs.changeItem(index)} key={index}>
        <button className='btn' onClick={() => tabs.changeItem(index)} key={index}>
          {section.tab}
        </button>
      ))}
      <div>
        {/* typescript : {tabs?.currentItem.content} */}
        {tabs.currentItem.content}
      </div>
    </div>
  );
}

export default HookUseTabs;
