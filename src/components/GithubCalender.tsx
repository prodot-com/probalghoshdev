"use client";

import { useEffect, useState, useMemo } from "react";

type Day = {
  date: string;
  count: number;
};

interface CalendarProps {
  isDarkMode?: boolean;
  blockSize?: number;
  dataUrl?: string;
}

export default function GithubCalendar({
  isDarkMode = false, // Set false to match your initial image
  blockSize = 10,
  dataUrl = "/api/v1/calendar"
}: CalendarProps) {
  const [days, setDays] = useState<Day[]>([]);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState<{ day: Day; x: number; y: number } | null>(null);

  useEffect(() => {
    // Replace this with your actual fetch or local mock data
    fetch("/api/v1/calender")
      .then((res) => res.json())
      .then(setDays)
      .catch(() => setError(true));
  }, [dataUrl]);

  // useEffect(()=>{
  //   console.log(days)
  // })

  const getColor = (count: number) => {
    if (isDarkMode) {
      if (count === 0) return "#161b22";
      if (count < 3) return "#0e4429";
      if (count < 6) return "#006d32";
      if (count < 10) return "#26a641";
      return "#39d353";
    }
    // Light Mode (matches your original image)
    if (count === 0) return "#ebedf0";
    if (count < 3) return "#9be9a8";
    if (count < 6) return "#40c463";
    if (count < 10) return "#30a14e";
    return "#216e39";
  };

  // Grouping logic memoized for performance
  const { weeks, monthLabels, totalContributions } = useMemo(() => {
    const weeksArr: Day[][] = [];
    const labels: {number: number, label: string; index: number }[] = [];
    let total = 0;

    const now = new Date();
    const currentMonth = now.getMonth(); // Jan = 0
    console.log(currentMonth)

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      weeksArr.push(week);

      // count total
      week.forEach(d => (total += d.count));

      const firstDay = week[0];
      if (!firstDay) continue;

      const date = new Date(firstDay.date);
      const month = date.getMonth();
      // console.log(month)

      // Normalize month so year "starts" after current month
      // Example: currentMonth = Jan (0)
      // Feb (1) -> 1
      // Jan (0) -> 12
      const normalizedMonth =
        month <= currentMonth ? month + 12 : month;

      const prevWeek = weeksArr[weeksArr.length - 2];
      if (!prevWeek) {
        labels.push({
          number: i,
          label: date.toLocaleString("en-US", { month: "short" }),
          index: weeksArr.length - 1,
        });
      } else {
        const prevDate = new Date(prevWeek[0].date);
        const prevMonth = prevDate.getMonth();
        const prevNormalized =
          prevMonth <= currentMonth ? prevMonth + 12 : prevMonth;

        if (prevNormalized !== normalizedMonth) {
          labels.push({
            number: i,
            label: date.toLocaleString("en-US", { month: "short" }),
            index: weeksArr.length - 1,
          });
        }
        console.log(labels)
      }
    }

    return {
      weeks: weeksArr,
      monthLabels: labels,
      totalContributions: total,
    };
  }, [days]);


  if (error) return <div className="p-4 text-red-500">Failed to load data.</div>;

  return (
    <div 
      className="inline-block p-2"
      style={{ 
        backgroundColor: isDarkMode ? "#0d1117" : "#ffffff",
        borderColor: isDarkMode ? "#30363d" : "#e1e4e8",
        color: isDarkMode ? "#8b949e" : "#24292f"
      }}
    >
      {/* Container for Labels + Grid */}
      <div className="relative">
        
        {/* Month Labels row */}
        <div className="flex mb-2 ml- text-[11px] h-4 relative">
          {monthLabels
          .filter((m)=> m.number !== 0)
          .map((m, i) => (
            <span 
              key={i} 
              className="absolute" 
              style={{ left: `${m.index * (blockSize + 3)}px` }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="flex gap-2">

          {/* Main Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHovered({ day, x: rect.left + rect.width / 2, y: rect.top });
                    }}
                    onMouseLeave={() => setHovered(null)}
                    className="transition-colors duration-200"
                    style={{
                      width: blockSize,
                      height: blockSize,
                      backgroundColor: getColor(day.count),
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip implementation */}
      {hovered && (
        <div 
          className="fixed pointer-events-none z-50 px-2 py-1 text-[11px] text-white bg-gray-800 rounded shadow-lg -translate-x-1/2 -translate-y-full mb-2"
          style={{ left: hovered.x, top: hovered.y - 5 }}
        >
          <strong>{hovered.day.count} contributions</strong> on {new Date(hovered.day.date).toDateString()}
        </div>
      )}

      {/* Footer Info */}
      <div className="flex justify-between items-center mt-4 text-[12px]">
        <span>{totalContributions} contributions in the last year</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="mr-1 text-gray-500">Less</span>
          {[0, 2, 5, 8, 12].map(v => (
            <div 
              key={v} 
              style={{ width: blockSize, height: blockSize, backgroundColor: getColor(v), borderRadius: '2px' }} 
            />
          ))}
          <span className="ml-1 text-gray-500">More</span>
        </div>
      </div>
    </div>
  );
}