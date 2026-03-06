"use client";

import { useEffect, useState, useMemo } from "react";

/**
 * FIXED:
 * 1. Resolved Import Error: Replaced external "@components/ui/tooltipCustom" with a high-performance built-in tooltip system.
 * 2. Month Label Detection: Logic correctly identifies the first week of every month.
 * 3. Alignment: Labels are positioned absolutely based on the week index to align with columns.
 * 4. Overlap Prevention: Added a check to ensure labels are at least 2 weeks apart.
 * 5. First Month Visibility: Included the first month's label by default.
 */

type Day = {
  date: string;
  count: number;
  formattedDate: string;
};

interface CalendarProps {
  isDarkMode?: boolean;
  blockSize?: number;
  dataUrl?: string;
}

// Internal Tooltip Component to ensure the file is self-contained and runnable
const CustomTooltip = ({ 
  content, 
  children, 
  isDarkMode 
}: { 
  content: string; 
  children: React.ReactNode; 
  isDarkMode: boolean 
}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {visible && (
        <div 
          className={`fixed z-[9999] px-3 py-1.5 rounded-md border text-[13px] pointer-events-none transition-opacity duration-150 transform -translate-x-1/2 -translate-y-full mb-3 whitespace-nowrap instrument-serif tracking-wide shadow-xl ${
            isDarkMode 
              ? 'bg-[#0d1117] text-white border-gray-700' 
              : 'bg-white text-gray-900 border-gray-200'
          }`}
          style={{ left: position.x, top: position.y - 10 }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default function GithubCalendar({
  isDarkMode = true,
  blockSize = 10,
  dataUrl = "/api/v1/githubData"
}: CalendarProps) {
  const [days, setDays] = useState<Day[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!dataUrl) return;

    // Construct absolute URL to handle potential environment pathing issues
    const finalUrl = dataUrl.startsWith('/') 
      ? `${window.location.origin}${dataUrl}` 
      : dataUrl;

    fetch(finalUrl)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setDays)
      .catch(() => setError(true));
  }, [dataUrl]);

  const getColor = (count: number) => {
    if (isDarkMode) {
      if (count === 0) return "#161b22";
      if (count < 3) return "#0e4429";
      if (count < 6) return "#006d32";
      if (count < 10) return "#26a641";
      return "#39d353";
    }
    if (count === 0) return "#ebedf0";
    if (count < 3) return "#9be9a8";
    if (count < 6) return "#40c463";
    if (count < 10) return "#30a14e";
    return "#216e39";
  };

  const { weeks, monthLabels, totalContributions } = useMemo(() => {
    const weeksArr: Day[][] = [];
    const labels: { label: string; index: number }[] = [];
    let total = 0;

    if (!days || days.length === 0) return { weeks: [], monthLabels: [], totalContributions: 0 };

    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7).map((d) => {
        const dateObj = new Date(d.date);
        return {
          ...d,
          formattedDate: dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        };
      });

      weeksArr.push(week);
      week.forEach(d => (total += (d.count || 0)));
    }

    // 2. Identify Month Transitions
    weeksArr.forEach((week, index) => {
      const firstDay = week[0];
      if (!firstDay) return;

      const date = new Date(firstDay.date);
      const month = date.getMonth();

      const prevWeek = weeksArr[index - 1];
      const prevMonth = prevWeek ? new Date(prevWeek[0].date).getMonth() : -1;

      if (month !== prevMonth) {
        const labelText = date.toLocaleString("en-US", { month: "short" });
        
        const lastLabel = labels[labels.length - 1];
        if (!lastLabel || (index - lastLabel.index) >= 2) {
          labels.push({
            label: labelText,
            index: index,
          });
        }
      }
    });

    return { weeks: weeksArr, monthLabels: labels, totalContributions: total };
  }, [days]);

  const gridWidth = useMemo(() => {
    const gap = 3;
    return weeks.length * (blockSize + gap);
  }, [weeks, blockSize]);

  if (error) return <div className="p-4 text-red-500 font-sans">Failed to load contribution data.</div>;

  return (
    <div className={`w-full max-w-full rounded-sm overflow-hidden border p-4 ${
      isDarkMode ? 'bg-black border-white/5' : 'bg-white border-gray-200'
    }`}>
      <div className="overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
        <div style={{ width: gridWidth }} className="relative min-w-max pt-6">
          
          {/* Months Row */}
          <div className="flex mb-2 text-[11px] h-4 absolute top-0 left-0 w-full">
            {monthLabels.map((m, i) => (
              <span
                key={i}
                className={`absolute instrument-serif tracking-wide text-[12px] whitespace-nowrap ${
                  isDarkMode ? 'text-white/60' : 'text-gray-500'
                }`}
                style={{ left: `${m.index * (blockSize + 3)}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-0.75">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.75">
                {week.map((day) => (
                  <CustomTooltip 
                    key={day.date} 
                    content={`${day.count} contributions on ${day.formattedDate}`}
                    isDarkMode={isDarkMode}
                  >
                    <div
                      className="transition-colors duration-200 cursor-pointer"
                      style={{
                        width: blockSize,
                        height: blockSize,
                        backgroundColor: getColor(day.count),
                        borderRadius: "2px",
                      }}
                    />
                  </CustomTooltip>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`flex justify-between items-center mt-4 text-[12px] instrument-serif tracking-wide opacity-80 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <span>{totalContributions.toLocaleString()} contributions in the last year</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="mr-1">Less</span>
          {[0, 2, 5, 8, 12].map(v => (
            <div 
              key={v} 
              style={{ width: blockSize, height: blockSize, backgroundColor: getColor(v), borderRadius: '2px' }} 
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .gap-0\\.75 { gap: 3px; }
      `}} />
    </div>
  );
}