import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TableComponent = ({ data }) => {
  return (
    <motion.div
      className="bg-gray-100 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Lung Disease Analysis
        </h1>
        <motion.div
          className="overflow-x-auto shadow-lg rounded-lg bg-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <motion.tr
                className="bg-gray-200 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <th className="border border-gray-300 px-4 py-2">
                  Author Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
                <th className="border border-gray-300 px-4 py-2">Dataset</th>
                <th className="border border-gray-300 px-4 py-2">
                  All Models Used
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Methodology
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Best Model Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Best Model Accuracy
                </th>
              </motion.tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <motion.tr
                  key={index}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                    {item["Author Names"]}{" "}
                    <FaCheckCircle className="text-green-500" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Year}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Dataset || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item["All Models Used"]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Methodology}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                    {item["Best Model Name"]}{" "}
                    <FaCheckCircle className="text-blue-500" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item["Best Model Accuracy"]}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TableComponent;
