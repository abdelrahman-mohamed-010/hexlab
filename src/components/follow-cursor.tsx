'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FollowCursor({ size = 8, color = "black", delay = 0.05 }: { size?: number; color?: string; delay?: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed"
      animate={{ x: position.x - size / 2, y: position.y - size / 2 }}
      transition={{ type: "spring", mass: 0.5, damping: 20, stiffness: 300, duration: delay }}
      style={{ width: size, zIndex: 9999999, height: size, borderRadius: "50%", backgroundColor: color, opacity: isVisible ? 1 : 0 }}
    />
  );
}
