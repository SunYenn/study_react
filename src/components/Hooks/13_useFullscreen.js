import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';


const HookUseFullscreen = () => {


  // typescript : const useFullscreen = (callback: Function) => {
  const useFullscreen = (callback) => {

    // typescript : const element = useRef<HTMLImageElement | null>(null);
    const element = useRef();

    // typescript : const runCb = (isFull: boolean) => {
    const runCb = (isFull) => {
      if (callback && typeof callback === 'function') {
        callback(isFull)
      }
    }

    const triggerFull = () => {
      if (element.current) {
        element.current.requestFullscreen()
        runCb(true)
      }
    }

    const exitFull = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
        runCb(false)
      }
    }    

    return { element, triggerFull, exitFull }
  }

  const onFullS = (isFull) => {
    console.log(isFull ? "We are Full" : "We are small")
  }

  const { element, triggerFull, exitFull } = useFullscreen(onFullS)

  return (

    <div ref={element}>
      <img
        src='https://i.namu.wiki/i/zkGGHg4TTrBJYUWvZiT1kU1WRECoku8d-Q2iI1psbrFH44gM4bzxkcbBScKa_qRHI-CVHM3nVQZBe-3WnRTb0a6ABFaZmuDnrK3uwbHt5mTKc1stjv3OVOcDRYbIkukXAh3M3_3iH4dOn6DHD2Yipw.webp'
      />
      <div>
        <Button onClick={triggerFull}>Make Full</Button>
        <Button onClick={exitFull}>Exit Full</Button>
      </div>
    </div>
  );
}

export default HookUseFullscreen;
