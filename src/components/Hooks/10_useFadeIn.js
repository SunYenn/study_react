import { useEffect, useRef } from 'react';

function HookUseFadeIn() {

  // typescript : const useFadeIn = (duration: number, delay: number) => {
  const useFadeIn = (duration, delay) => {

    // typscript : const element = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        const {current} = element
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
        current.style.opacity = '1'
      }
    }, [])
    return { ref: element, style: { opacity: 0 } } //  페이드인 효과가 시작되기 전, 요소의 초기 상태 적용
  }

  const fadeInH2 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 5)

  return (
    <div>
      <h2 {...fadeInH2}>Hello</h2>
      <p {...fadeInP}>lalalala</p>
    </div>
  )
}

export default HookUseFadeIn;
