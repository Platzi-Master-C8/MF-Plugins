import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartHalfDoughtnut = ({ loading }) => {


  const data = {
    labels: ['Today', 'Daily Average'],
    datasets: [
      {
        label: 'time develop',
        data: [75, 25],
        backgroundColor: ['#AE4EFF', '#fff'],
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
    <>
      {loading ? (
        <section className="dunnut loading">
          <Skeleton
            containerClassName="loading-skeletonContainer"
            className="skeleton-item"
          />
        </section>
      ) : null}

      {!loading ? (
        <div className="donnutChart-container">
          <div className="chart-title">
            <h2>
              Thu Nov 12th <span>3 hrs 00 mins</span>
            </h2>
          </div>
          <div className="donnutChart">
            <Doughnut data={data} options={options} />
          </div>
          <p className="percent">86%</p>
          <p className="average">
            Daily Average: <span>3 hrs 33 mins</span>
          </p>
        </div>
      ) : null}
    </>
  );
};

ChartHalfDoughtnut.propTypes = {};
