import React, { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils/helperFunctions";

interface CircularProgressBarProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  progressBarColor: string;
  backgroundBarColor: string;
  mainClassName: string;
  parentClassName: string;
  svgClassName: string;
  strokeWidthClassName: string;
  children?: React.ReactNode;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  size = 100,
  strokeWidth = 10,
  children,
  progressBarColor,
  backgroundBarColor,
  mainClassName,
  parentClassName,
  svgClassName,
  strokeWidthClassName,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(circumference);

  useEffect(() => {
    setTimeout(() => {
      setProgress(circumference - (value / 100) * circumference);
    }, 100);
  }, [value, circumference]);

  return (
    <div className={cn("relative", mainClassName)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={cn("", svgClassName)}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={backgroundBarColor}
          className={cn(strokeWidthClassName)} // Apply Tailwind stroke width class
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressBarColor}
          fill="transparent"
          className={cn(strokeWidthClassName)} // Apply Tailwind stroke width class
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition: "stroke-dashoffset 1.5s ease-in-out",
          }}
        />
      </svg>
      <div className={cn("", parentClassName)}>{children}</div>
    </div>
  );
};

export default CircularProgressBar;
