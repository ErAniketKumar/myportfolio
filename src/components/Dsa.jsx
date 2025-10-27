import React from "react";
import { FaBook, FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Dsa() {
  const items = [
    {
      id: 1,
      title: "LeetCode",
      desc: "Practice algorithm problems and track progress.",
      url: "https://leetcode.com/",
      icon: <FaCode className="text-3xl text-yellow-400" />,
    },
    {
      id: 2,
      title: "CodeChef / Codeforces",
      desc: "Competitive programming practice and contests.",
      url: "https://www.codechef.com/",
      icon: <FaLaptopCode className="text-3xl text-yellow-400" />,
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      desc: "Core DSA concepts and notes for interviews.",
      url: "#",
      icon: <FaBook className="text-3xl text-yellow-400" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-sm font-semibold text-yellow-500 tracking-wider uppercase">
          Practice & Algorithms
        </h3>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
          LeetCode · CodeChef · DSA
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          A short list of resources and links to my coding profiles and notes.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <motion.a
            key={it.id}
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="block p-6 rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 hover:border-yellow-500/50 transition-all shadow-lg max-w-full"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-xl">{it.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-white">{it.title}</h4>
                <p className="text-gray-400 mt-1">{it.desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
