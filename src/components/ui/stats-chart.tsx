"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import CountUp from "react-countup";

export default function StatsChart() {
  const data = [
    { month: "Q1", value: 0 },
    { month: "Q2", value: 8 },
    { month: "Q3", value: 18 },
    { month: "Q4", value: 25 },
    { month: "Launch", value: 30 },
    { month: "Post", value: 35 },
  ];

  const stats = [
    { value: "$5M", label: "NRE Funding" },
    { value: "Accelerated", label: "Time to Market" },
    { value: "97%+", label: "Clinical Success" },
    { value: "3x", label: "ROI Projected" },
  ];

  return (
    <>
      <div className="relative w-full h-[400px] bg-gradient-to-br from-background/50 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 shadow-lg lg:block hidden">
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
              strokeWidth={3}
              fill="url(#primaryGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Overlay Hero Number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <h3 className="text-6xl font-extrabold text-foreground drop-shadow-md">
            $<CountUp end={30} duration={2.5} />M
          </h3>
          <p className="text-muted-foreground font-semibold">Co-dev Investment</p>
        </div>

        {/* Side Stats - Desktop */}
        <div className="absolute right-4 top-4 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col gap-4 border border-primary/20">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-5">
        <div className="relative w-full h-[300px] bg-gradient-to-br from-background/50 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="primaryGradientMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="url(#primaryGradientMobile)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <h3 className="text-5xl font-extrabold text-foreground drop-shadow-md">
              $<CountUp end={30} duration={2.5} />M
            </h3>
            <p className="text-muted-foreground font-semibold">Co-dev Investment</p>
          </div>
        </div>

        {/* Mobile Stats - Below Chart */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-card/95 backdrop-blur-sm rounded-lg shadow-md p-4 border border-primary/20">
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
