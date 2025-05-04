import React from 'react';

const StatCard = ({ 
  title, 
  value, 
  trend, 
  color,
  additionalInfo 
}) => {
  const bgColors = {
    pink: 'bg-pink-50',
    blue: 'bg-blue-50',
    orange: 'bg-orange-50',
    purple: 'bg-purple-50'
  };
  
  return (
    <div className={`stat-card ${bgColors[color]}`}>
      <h3 className="card-title">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-4xl font-bold">{value}</p>
          {additionalInfo && (
            <div className="mt-3 text-sm text-gray-500">
              {additionalInfo}
            </div>
          )}
        </div>
        
        {trend && (
          <div className="flex flex-col items-end">
            <div className="h-12 w-24 relative">
              {trend.direction === 'up' ? (
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <path 
                    d="M0,50 Q30,50 40,35 T60,25 T80,10 T100,0" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="2"
                    className="trend-line"
                  />
                </svg>
              ) : (
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <path 
                    d="M0,0 Q30,0 40,15 T60,25 T80,40 T100,50" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2"
                    className="trend-line"
                  />
                </svg>
              )}
            </div>
            <p className={`text-sm ${trend.direction === 'up' ? 'trend-up' : 'trend-down'} font-medium`}>
              {trend.direction === 'up' ? '+' : '-'}{trend.value} {trend.period}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
