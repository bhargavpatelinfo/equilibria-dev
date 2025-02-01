import React, { useEffect, useState } from "react";

interface CircularProgressBarProps {
  value: number; // Progress value (0 to 100)
  size: number; // Size of the circular progress bar
  strokeWidth: number; // Width of the circle's stroke
  textColor: string;
  progressBarColor: string;
  children?: React.ReactNode;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = (props) => {
  const {
    value,
    size,
    strokeWidth,
    children,
    textColor = "#ffffff",
    progressBarColor = "#C46BAE",
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
    <svg width={size} height={size} className="mx-auto">
      <circle
        className="circle-background"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <circle
        className="circle-progress"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={"#C46BAE"}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        style={{
          transition: "stroke-dashoffset 1.5s ease-in-out",
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20px"
        fontWeight="bold"
        fill={textColor}
      >
        {children}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
