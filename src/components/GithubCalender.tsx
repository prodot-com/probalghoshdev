"use client";

import { useEffect, useState } from "react";

type Day = {
  date: string;
  count: number;
};

export default function GithubCalendar({
  isDarkMode = true,
  blockSize = 12,
}: {
  isDarkMode?: boolean;
  blockSize?: number;
}) {
  const [days, setDays] = useState<Day[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/v1/calender")
      .then((res) => res.json())
      .then((data) => setDays(data))
      .catch(() => setError(true));
  }, []);

  // GitHub-accurate colors based on the image provided
  const getColor = (count: number) => {
    if (isDarkMode) {
      if (count === 0) return "#161b22"; // Deep dark gray
      if (count < 3) return "#0e4429";  // Darkest green
      if (count < 6) return "#006d32";  // Medium green
      if (count < 10) return "#26a641"; // Bright green
      return "#39d353";                // Neon green
    } else {
      if (count === 0) return "#ebedf0";
      if (count < 3) return "#9be9a8";
      if (count < 6) return "#40c463";
      if (count < 10) return "#30a14e";
      return "#216e39";
    }
  };

  // Helper to group days into weeks (columns)
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const totalContributions = days.reduce((acc, day) => acc + day.count, 0);

  if (error) return <p className="text-red-500">Failed to load GitHub data</p>;

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? "bg-black text-gray-400" : "bg-white text-gray-600"} font-sans text-xs`}>
      
      {/* Month Labels (Simplified) */}
      <div className="flex mb-2 ml-2 gap-[26px]">
        {["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className="transition-colors duration-200"
                style={{
                  width: blockSize,
                  height: blockSize,
                  backgroundColor: getColor(day.count),
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Footer: Stats and Legend */}
      <div className="flex justify-between items-center mt-2 px-2 text-[11px]">
        <div>
          <span className="font-bold text-gray-200">{totalContributions}</span> contributions in 2025-26
        </div>
        
        <div className="flex items-center gap-1">
          <span>Less</span>
          {[0, 2, 5, 8, 12].map((lvl) => (
            <div 
              key={lvl} 
              style={{ width: 10, height: 10, backgroundColor: getColor(lvl), borderRadius: 2 }} 
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}