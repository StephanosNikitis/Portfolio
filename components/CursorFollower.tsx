"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const positionRef = useRef<Position>({ x: 0, y: 0 });
  const targetRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", updateMousePosition);

    let animationFrameId: number;
    
    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${positionRef.current.x}px - 50%), calc(${positionRef.current.y}px - 50%), 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#3A4A16",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    />
  );
}