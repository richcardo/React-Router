import {useState,useRef, useEffect} from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, scroll)

  return [scroll, ref]
}
