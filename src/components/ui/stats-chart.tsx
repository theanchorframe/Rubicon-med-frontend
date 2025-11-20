"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import CountUp from "react-countup";

export default function StatsChart() {
  const data = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 8 },
    { month: "Mar", value: 12 },
    { month: "Apr", value: 18 },
    { month: "May", value: 25 },
    { month: "Jun", value: 30 },
  ];

  return (
    <div className="relative w-full h-[400px] bg-background rounded-2xl overflow-hidden border border-border shadow-lg">
      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#primaryGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Overlay Hero Number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h3 className="text-6xl font-extrabold text-foreground drop-shadow-md">
          $<CountUp end={30} duration={2.5} />M
        </h3>
        <p className="text-muted-foreground">Co-dev Investment</p>
      </div>

      {/* Side Stats */}
      <div className="absolute right-4 top-4 bg-card rounded-xl shadow-md p-4 flex flex-col gap-4 border border-border">
        {[
          { value: "$5M", label: "NRE Funding" },
          { value: "18mo", label: "Time to Market" },
          { value: "95%", label: "Clinical Success" },
          { value: "3x", label: "ROI Projected" },
        ].map((stat, idx) => (
          <div key={idx}>
            <p className="text-xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
