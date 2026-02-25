"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";

export default function StatsChart() {
  const [isInView, setIsInView] = useState(false);
  
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
  ];

  return (
    <>
      <motion.div 
        initial={false}
        whileInView={{ opacity: 1, scale: 1 }}
        onViewportEnter={() => setIsInView(true)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-[400px] bg-gradient-to-br from-background/50 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 shadow-lg hidden md:block"
      >
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
        <motion.div 
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <h3 className="text-6xl font-extrabold text-foreground drop-shadow-md">
            {isInView && <><CountUp end={30} duration={2.5} prefix="$" suffix="M" /></>}
            {!isInView && "$30M"}
          </h3>
          <p className="text-muted-foreground font-semibold">Co-dev Investment</p>
        </motion.div>

        {/* Side Stats - Desktop */}
        <motion.div 
          initial={false}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-4 top-4 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col gap-4 border border-primary/20"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={false}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
            >
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <div className="md:hidden space-y-5">
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setIsInView(true)}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[300px] bg-gradient-to-br from-background/50 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 shadow-lg"
        >
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

          <motion.div 
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
          >
            <h3 className="text-5xl font-extrabold text-foreground drop-shadow-md">
              {isInView && <><CountUp end={30} duration={2.5} prefix="$" suffix="M" /></>}
              {!isInView && "$30M"}
            </h3>
            <p className="text-muted-foreground font-semibold">Co-dev Investment</p>
          </motion.div>
        </motion.div>

        {/* Mobile Stats - Below Chart */}
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/95 backdrop-blur-sm rounded-lg shadow-md p-4 border border-primary/20"
            >
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
