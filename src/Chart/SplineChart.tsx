import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface ChartProps {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

const SplineChart: React.FC<ChartProps> = ({ series, categories }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      series,
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [series, categories]);

  return <div ref={chartRef} />;
};

export default SplineChart;
