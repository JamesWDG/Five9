"use client"
import { useRef, useEffect } from "react";

export default function FancyButton() {
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const icon = iconRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // thoda movement - magnetic effect
      icon.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
      icon.style.transform = `translate(0,0)`;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); 

  return (
    <button ref={btnRef} className="asas">
      <span className="text-wrapper">
        <span className="text top">Contact Us</span>
        <span className="text bottom">Contact Us</span>
      </span>
      <span ref={iconRef} className="icon">
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </button>
  );
}