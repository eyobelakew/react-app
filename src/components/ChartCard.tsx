import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type ChartCardProps = {
  title: string;
  chartType: "line" | "bar" | "pie";
  chartData: any;
};

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  chartType,
  chartData,
}) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {chartType === "line" && <Line data={chartData} />}
        {chartType === "bar" && <Bar data={chartData} />}
        {chartType === "pie" && <Pie data={chartData} />}
      </div>
    </div>
  </div>
);

export default ChartCard;
