import React from 'react';
import PropTypes from 'prop-types';
import { ChartPieListItem } from '../../containers/ChartPieListItem/ChartPieListItem';
import { ChartPieItem } from '../../components/ChartPieItem/ChartPieItem';
import 'react-loading-skeleton/dist/skeleton.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartPie = ({ usedLanguages }) => {
  const labels = usedLanguages.map(data => data.lan)
  const values = usedLanguages.map(data => data.time)
  const colors = usedLanguages.map(lan => lan.color)
  const chartData = {
    labels: labels,
    datasets: [{
      data: values,
      backgroundColor: colors,
      hoverOffset: 4
    }]
  };

  const chartOptions =  {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Time (in minutes)',
        align: "start",
        font: {
          size: 19
        },
        padding: {
          bottom: 30,
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div className="pieChart">
          <div className="chart-container">
            <Pie 
              options={chartOptions} 
              data={chartData} 
            />
          </div>
          <ChartPieListItem 
            usedLanguages={usedLanguages}
            colors={colors}
          />
      </div>
    </React.Fragment>
  )
}


ChartPie.propTypes = {
  usedLanguages: PropTypes.array,
  loading: PropTypes.bool,
};
  