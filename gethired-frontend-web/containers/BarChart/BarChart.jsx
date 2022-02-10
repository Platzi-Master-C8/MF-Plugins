import React from "react";
import PropTypes from "prop-types";

import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = ({ usedLanguages }) => {
  const colors = [
    '#AE4EFF',
    '#555BFF',
    '#0AC533',
    '#FF5353',
    '#FBA618'
  ]
  const labels = usedLanguages.map( data => data.name )
  const values = usedLanguages.map( data => data.value )
  const chartData = {
    labels: labels,
    datasets: [{
      data: values,
      barThickness: 30,
      backgroundColor: colors,
      hoverOffset: 4,
      barPercentage: 0.1
    }]
  };

  const chartOptions =  {
    maintainAspectRatio: false,
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
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 16,
          },
        },
        grid: {
          display: false,
        }
      }
    }
  }

  return(
    <React.Fragment>
      <section className="barchartContainer">
        <article>
          <Bar options={chartOptions} data={chartData} />
        </article>
      </section>
    </React.Fragment>
  )
}

BarChart.propTypes = {
    loading: PropTypes.bool,
}