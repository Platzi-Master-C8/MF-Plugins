import React from 'react';
import { COLORS } from "../../constants";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartHalfDoughtnut = ({ time }) => {
  const data = {
    labels: ['Today', 'Daily Average'],
    datasets: [
      {
        label: 'time develop',
        data: [75, 25],
        backgroundColor: [...COLORS],
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
              Thu Nov 12th
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
