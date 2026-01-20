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

  const getColor = (count: number) => {
    if (count === 0) return isDarkMode ? "#0f172a" : "#e5e7eb";
    if (count < 5) return "#22c55e";
    if (count < 10) return "#16a34a";
    if (count < 20) return "#15803d";
    return "#166534";
  };

  if (error) return <p className="text-red-500">Failed to load GitHub data</p>;

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-flow-col gap-2">
        {Array.from({ length: 7 }).map((_, dayIndex) => (
          <div key={dayIndex} className="flex flex-col gap-2">
            {days
              .filter((_, i) => i % 7 === dayIndex)
              .map((day) => (
                <div
                  key={day.date}
                  title={`${day.count} contributions on ${day.date}`}
                  style={{
                    width: blockSize,
                    height: blockSize,
                    backgroundColor: getColor(day.count),
                    borderRadius: 4,
                  }}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
