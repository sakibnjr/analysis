import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const VisualizationComponent = ({ modelCounts, methodologyCounts }) => {
  const modelData = Object.entries(modelCounts).map(([name, count]) => ({
    name,
    count,
  }));
  const methodologyData = Object.entries(methodologyCounts).map(
    ([name, count]) => ({
      name,
      count,
    })
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff0000"];

  return (
    <motion.div
      className="p-6 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Visualization</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Bar Chart for Models */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4">
            Common Models
          </h3>
          <BarChart width={500} height={300} data={modelData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </motion.div>

        {/* Pie Chart for Methodologies */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-center mb-4">
            Common Methodologies
          </h3>
          <PieChart width={400} height={400}>
            <Pie
              data={methodologyData}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#82ca9d"
              label
            >
              {methodologyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VisualizationComponent;
