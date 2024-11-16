import React from "react";
import TableComponent from "./TableComponent";
import VisualizationComponent from "./VisualizationComponent";
import data from "../public/data.json";

const analyzeData = (data) => {
  const modelCounts = {};
  const methodologyCounts = {};

  data.forEach((item) => {
    const models = item["All Models Used"]
      .split(/,| and | \+ /)
      .map((m) => m.trim());
    models.forEach((model) => {
      modelCounts[model] = (modelCounts[model] || 0) + 1;
    });

    const methodologies = item.Methodology.split(/[.;]/).map((m) => m.trim());
    methodologies.forEach((method) => {
      methodologyCounts[method] = (methodologyCounts[method] || 0) + 1;
    });
  });

  return { modelCounts, methodologyCounts };
};

function App() {
  const { modelCounts, methodologyCounts } = analyzeData(data);

  return (
    <div>
      <TableComponent data={data} />
      <VisualizationComponent
        modelCounts={modelCounts}
        methodologyCounts={methodologyCounts}
      />
    </div>
  );
}

export default App;
