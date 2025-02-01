import React, { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils/helperFunctions";

interface CircularProgressBarProps {
  value: number; // Progress value (0 to 100)
  size: number; // Size of the circular progress bar
  strokeWidth: number; // Width of the circle's stroke
  textColor: string;
  progressBarColor: string;
  backgroundBarColor: string;
  mainClassName: string;
  parentClassName: string;
  svgClassName: string;
  children?: React.ReactNode;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = (props) => {
  const {
    value,
    size,
    strokeWidth,
    children,
    textColor = "#000",
    progressBarColor,
    backgroundBarColor,
    mainClassName,
    parentClassName,
    svgClassName,
  } = props || {};
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(circumference);

  useEffect(() => {
    setTimeout(() => {
      setProgress(circumference - (value / 100) * circumference);
    }, 100);
  }, [value, circumference]);

  return (
    <div
      className={cn("relative", mainClassName)}
      style={{ width: size, height: size, position: "relative" }}
    >
      <svg width={size} height={size} className={cn("mx-auto", svgClassName)}>
        <circle
          className="circle-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={backgroundBarColor}
          strokeWidth={strokeWidth}
        />
        <circle
          className="circle-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressBarColor}
          strokeWidth={strokeWidth}
          fill="transparent"
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
