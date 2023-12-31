import React, { useEffect, useState } from 'react';

const HookUseScroll = () => {

  const useScroll = () => {

    const [state, setState] = useState({
      x: 0,
      y: 0
    })

    const onScroll = () => {
      console.log('windos', window)
      setState({ y : window.scrollY, x : window.scrollX})
    }

    useEffect(() => {
      window.addEventListener("scroll", onScroll)
      return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return state
  }

  const { y } = useScroll()

  return (

    <div className='scroll' style={{ height : '300vh' }}>
      <h1 style={{ color : y > 100 ? 'red' : 'blue' }}>Hello</h1>
    </div>

  );
}

export default HookUseScroll;
