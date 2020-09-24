import { useState, useEffect, useRef } from "react"

const useOnScreen = options => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!visible) setVisible(entry.isIntersecting)
    }, options)
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options])
  return [ref, visible]
}
export default useOnScreen
