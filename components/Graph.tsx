import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering the necessary components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Title, Tooltip, Legend);

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Views',
      data: [2000, 3000, 4000, 5000, 6000],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
};

const Graph = () => {
  return (
    <div>
      <h3>Views in Last 7 Days</h3>
      <Line data={data} />
    </div>
  );
};



export default Graph;
