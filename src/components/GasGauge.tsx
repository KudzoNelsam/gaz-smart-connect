import React from 'react';
interface GasGaugeProps {
  level: number; // 0-100 percentage
  size?: number;
  showLabel?: boolean;
}
const GasGauge: React.FC<GasGaugeProps> = ({
  level,
  size = 200,
  showLabel = true
}) => {
  // Ensure level is between 0-100
  const safeLevel = Math.min(100, Math.max(0, level));

  // Calculate stroke dash values for the gauge
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = circumference * (1 - safeLevel / 100);

  // Determine color based on gas level
  const getColor = () => {
    if (safeLevel <= 10) return '#F44336'; // Red for very low
    if (safeLevel <= 25) return '#FF9800'; // Orange for low
    return '#1E88E5'; // Blue for normal
  };
  return <div className="relative" style={{
    width: size,
    height: size
  }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e0e0e0" strokeWidth="10" fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={getColor()} strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={dashArray} strokeDashoffset={dashOffset} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
        
        {/* Level indicator */}
        {showLabel && <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="2rem" fontWeight="bold">
            {`${Math.round(safeLevel)}%`}
          </text>}

        {/* Gas cylinder icon at the bottom */}
        <g transform={`translate(${size / 2 - 10} ${size - 30})`}>
          <path d="M4 2h12v1a3 3 0 013 3v13a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3V2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 2H6V5H14V2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>
      
      {/* Status indicator */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-sm font-medium my-[30px]">
        {safeLevel <= 10 ? <span className="text-gas-red">Critical</span> : safeLevel <= 25 ? <span className="text-gas-orange">Low</span> : <span className="text-gas-blue py-0 my-0">Normal</span>}
      </div>
    </div>;
};
export default GasGauge;