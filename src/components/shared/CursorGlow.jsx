import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [point, setPoint] = useState({ x: -120, y: -120 });

  useEffect(() => {
    const onMove = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div className="cursor-glow" style={{ left: point.x, top: point.y }} aria-hidden="true" />;
}
