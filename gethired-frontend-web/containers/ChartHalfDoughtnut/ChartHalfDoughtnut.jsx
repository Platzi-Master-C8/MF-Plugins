import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { setDateFormat } from '../../utils/setDateFormat';



ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartHalfDoughtnut = ({ time, lastTracking }) => {
  lastTracking = setDateFormat(lastTracking)

  const data = {
    labels: ['Today', 'Daily Average'],
    datasets: [
      {
        label: 'time develop',
        data: [75, 25],
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
          <p className="percent">86%</p>
        </article>
        <p className="average">
          Daily Average: <span>{time} mins</span>
        </p>
      </section>
    </React.Fragment>
  );
};

ChartHalfDoughtnut.propTypes = {};
