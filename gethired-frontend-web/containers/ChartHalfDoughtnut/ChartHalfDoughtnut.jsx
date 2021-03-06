import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { setDateFormat } from '../../utils/setDateFormat';
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartHalfDoughtnut = ({ time, lastTracking }) => {
  const percentage = Math.round((time / time) * 100)

  lastTracking = setDateFormat(String(new Date()), true)

  const data = {
    labels: ['Today', 'Daily Average'],
    datasets: [
      {
        label: 'time develop',
        data: [percentage, percentage - 100],
        backgroundColor: ['rgba(85,91,255,1)', 'rgba(85,91,255,0.1)'],
        borderWidth: 0,
      },
    ],
  };
  
  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  
  return (
    <React.Fragment>
      <section className="donnutChart-container">
        <article>
          <div className="chart-title">
            <h2>
              {lastTracking}
            </h2>
          </div>
          <div className="donnutChart">
            <Doughnut data={data} options={options} />
          </div>
          <p className="percent">{percentage}%</p>
        </article>
        <p className="average">
          Daily Average: <span>{time} mins</span>
        </p>
      </section>
    </React.Fragment>
  );
};

ChartHalfDoughtnut.propTypes = {};
