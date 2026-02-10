"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatsProps {
    dict: {
        years: string;
        projects: string;
        clients: string;
        states: string;
    };
}

const stats = [
    { key: "years", value: 12, suffix: "+" },
    { key: "projects", value: 85, suffix: "+" },
    { key: "clients", value: 50, suffix: "+" },
    { key: "states", value: 8, suffix: "" },
];

export default function AboutStats({ dict }: StatsProps) {
    return (
        <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <Counter key={stat.key} value={stat.value} label={dict[stat.key as keyof typeof dict]} suffix={stat.suffix} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay }}
                className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline"
            >
                {count}
                <span className="text-2xl md:text-3xl ml-1 text-blue-200">{suffix}</span>
            </motion.div>
            <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">{label}</p>
        </div>
    );
}
