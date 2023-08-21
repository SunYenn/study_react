import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
  
  const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab)
    if(!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    }
  }

  const tabs = useTabs(0, content);

  return (
    <div>
      <h2>Hello</h2>
      {content.map((section, index) => (
        <Button variant='info' onClick={() => tabs?.changeItem(index)}>
          {section.tab}
        </Button>
      ))}
      <div>
        {tabs?.currentItem.content}
      </div>
    </div>
  );
}

export default HookUseTabs;
