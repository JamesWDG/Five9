"use client";
import { useEffect, useRef } from "react";
const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      outerRef.current.style.left = `${mouseX}px`;
      outerRef.current.style.top = `${mouseY}px`;
    };
    const animateInner = () => {
      innerX += (mouseX - innerX) * 0.15;
      innerY += (mouseY - innerY) * 0.15;
      innerRef.current.style.left = `${innerX}px`;
      innerRef.current.style.top = `${innerY}px`;
      requestAnimationFrame(animateInner);
    };
    document.addEventListener("mousemove", moveMouse);
    animateInner();
    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (
    <>
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
};

export default CustomCursor;
