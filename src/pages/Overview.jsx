import OverviewHeatMap from "../components/overview/OverviewHeatMap"
import { useHabitManager } from "../hooks/useHabitManager";

const Overview = () => {
  const { habits } = useHabitManager();

  return (
    <div className="py-4 px-4 lg:px-42 text-white">
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <OverviewHeatMap habits={habits} />
    </div>
  );
};

export default Overview;