import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { config } from '../../config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const bgColor =
  config.themeMode === 'primary'
    ? '13, 110, 253'
    : config.themeMode === 'success'
    ? '25, 135, 84'
    : '220, 53, 69';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      // backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      backgroundColor: `rgba(${bgColor}, 0.1)`,
      borderColor: [
        `rgba(${bgColor}, 0.3)`,
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      fill: true,
      tension: 0.4,
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-100" style={{ height: '180px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
