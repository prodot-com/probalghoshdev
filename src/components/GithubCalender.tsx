"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltipCustom"

type Day = {
  date: string;
  count: number;
  formattedDate: string
};

interface CalendarProps {
  isDarkMode?: boolean;
  blockSize?: number;
  dataUrl?: string;
}

export default function GithubCalendar({
  isDarkMode,
  blockSize = 10,
  dataUrl = "/api/v1/githubData"
}: CalendarProps) {
  const [days, setDays] = useState<Day[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
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
    const labels: {formatedDate: string, number: number, label: string; index: number }[] = [];
    let total = 0;

    const now = new Date();
    const currentMonth = now.getMonth();

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

      week.forEach(d => (total += d.count));

      const firstDay = week[0];
      if (!firstDay) continue;

      const date = new Date(firstDay.date);
      const month = date.getMonth();
      const normalizedMonth =
        month <= currentMonth ? month + 12 : month;

      const prevWeek = weeksArr[weeksArr.length - 2];
      if (!prevWeek) {
        labels.push({
          number: i,
          label: date.toLocaleString("en-US", { month: "short" }),
          index: weeksArr.length - 1,
          formatedDate: date.toLocaleString("en-US", { month: "short" , day: "numeric",  year: "numeric"}),
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
            formatedDate: date.toLocaleString("en-US", { month: "short" , day: "numeric",  year: "numeric"}),
          });
        }
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
      className="inline-block p-2 bg-white/10 dark:bg-black"
    >
      <div className="relative">
        <div className="flex mb-2 ml- text-[11px] h-4 relative">
          {monthLabels
          .filter((m)=> m.number !== 0)
          .map((m, i) => (
            <span 
              key={i} 
              className="absolute instrument-serif tracking-wide text-[12px]" 
              style={{ left: `${m.index * (blockSize + 3)}px` }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="flex gap-2">

          <div className="flex gap-0.75">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.75">
                {week.map((day) => (
                  <Tooltip key={day.date}>
                    <TooltipTrigger>
                      <div
                        key={day.date}
                        className="transition-colors duration-200"
                        style={{
                          width: blockSize,
                          height: blockSize,
                          backgroundColor: getColor(day.count),
                          borderRadius: "2px",
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent
                    className="instrument-serif tracking-wide text-[13px]"
                    >
                      <p>{`${day.count} Contribution on ${day.formattedDate}`}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-[12px] instrument-serif tracking-wide">
        <span>{totalContributions} contributions in the last year</span>
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
    </div>
  );
}