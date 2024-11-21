import LayoutAdmin from "../../../component/Layout/LayoutAdmin";

import CardStat from "../../../component/Card/CardStat";
import SplineChart from "../../../Chart/SplineChart";

const stats = [
  {
    id: 1,
    title: "Total User",
    value: "40,768",
  },
  {
    id: 2,
    title: "Total Order",
    value: "18796",
  },
  {
    id: 3,
    title: "Total Sales",
    value: "$89,000",
  },
  {
    id: 4,
    title: "Total Profit",
    value: "$10,890",
  },
  {
    id: 5,
    title: "Today",
    value: "$4,000",
  },
];
const Dashboard = () => {
  return (
    <LayoutAdmin>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-around space-x-3 py-4">
          {stats.map((stat) => (
            <CardStat id={stat.id} title={stat.title} value={stat.value} />
          ))}
        </div>
        <div className="w-full flex flex-row justify-around items-center">
          <div className="w-5/12">
            <SplineChart
              series={[
                {
                  name: "Sales",
                  data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                  name: "costs",
                  data: [11, 32, 45, 32, 34, 52, 41],
                },
              ]}
              categories={[
                "2024-09-19T00:00:00.000Z",
                "2024-09-19T01:30:00.000Z",
                "2024-09-19T02:30:00.000Z",
                "2024-09-19T03:30:00.000Z",
                "2024-09-19T04:30:00.000Z",
                "2024-09-19T05:30:00.000Z",
                "2024-09-19T06:30:00.000Z",
              ]}
            />
          </div>
          <div className="w-5/12">
            <p>stack</p>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
