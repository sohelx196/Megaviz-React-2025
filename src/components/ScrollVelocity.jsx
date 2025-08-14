import React from "react";

export default function ScrollVelocity({ children, velocity = 1 }) {
  return (
    <div style={{ transform: `translateX(${velocity}px)` }}>
      {children}
    </div>
  );
}

