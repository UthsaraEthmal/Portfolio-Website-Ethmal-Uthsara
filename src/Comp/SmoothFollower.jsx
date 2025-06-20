'use client';
import { useState, useEffect, useRef } from 'react';
export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    window.addEventListener('mousemove', handleMouseMove);
    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    const animate = () => {
      const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
      };
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );
      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );
      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);
  if (typeof window === 'undefined') return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      


<div style={{
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  pointerEvents: 'none',
}}>
  {/* Red Dot */}
  <div
    style={{
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      left: `${renderPos.dot.x}px`,
      top: `${renderPos.dot.y}px`,
      pointerEvents: 'none',
    }}
  />



  {/*  White Border Ring */}
  <div
    style={{
      position: 'absolute',
      width: '40px',
      height: '40px',
      border: '2px solid #21b4b4',
      
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      left: `${renderPos.border.x}px`,
      top: `${renderPos.border.y}px`,
      pointerEvents: 'none',
      transition: 'width 0.3s, height 0.4s',
    }}
  />

  {/*  Outer Glow Ring */}
  <div
    style={{
      position: 'absolute',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      border: '2px solid white',
      transform: 'translate(-50%, -50%)',
      left: `${renderPos.dot.x}px`,
      top: `${renderPos.dot.y}px`,
     
      pointerEvents: 'none',
      transition: 'opacity 0.3s ease',
    }}
  />
</div>




    </div>
  );
}
