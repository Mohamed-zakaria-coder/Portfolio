import React, { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isTouchOrSmallScreen, setIsTouchOrSmallScreen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px), (hover: none), (pointer: coarse)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 1024px), (hover: none), (pointer: coarse)");
    
    const handleMediaChange = (e) => {
      setIsTouchOrSmallScreen(e.matches);
    };

    setIsTouchOrSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchOrSmallScreen) return;

    const onMove = (event) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${event.clientX}px`;
      glowRef.current.style.top = `${event.clientY}px`;
    }; 

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, [isTouchOrSmallScreen]);

  if (isTouchOrSmallScreen) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ left: -120, top: -120 }}
      aria-hidden="true"
    />
  );
}