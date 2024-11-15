import LayoutAdmin from "../../../component/Layout/LayoutAdmin";

import CardStat from "../../../component/Card/CardStat";

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
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-around space-x-3 py-4">
          {stats.map((stat) => (
            <CardStat id={stat.id} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
