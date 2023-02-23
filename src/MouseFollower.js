import { useState, useCallback } from 'react';

export const MouseFollower = ({
    width,
    height,
    circleRadius,
    initialMousePosition
  }) => {
    const [mousePosition, setMousePosition] = useState(initialMousePosition);
  
    const handleMouseMove = useCallback((event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }, [setMousePosition]);
  
    return (
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius}
        />
      </svg>
    );
  }