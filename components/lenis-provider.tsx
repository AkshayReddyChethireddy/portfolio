"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        navigator.maxTouchPoints > 0 ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll triggers
    lenis.on("scroll", () => {
      // Trigger global scroll updates if needed
    });

    // Custom Cursor logic
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth cursor interpolation (magnetic follow)
    let animationFrameId: number;
    const updateCursor = () => {
      const ease = 0.12; // Lower value = more lag/weight
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };
    updateCursor();

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      {/* Custom Fluid Cursor */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/25 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-all duration-300 ease-out flex items-center justify-center mix-blend-difference"
          style={{
            transform: "translate3d(-100px, -100px, 0)",
          }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      )}
      <div className="lenis-content">{children}</div>
    </>
  );
}
