import React from 'react';
import PropTypes from 'prop-types';
import { ChartPieListItem } from '../../containers/ChartPieListItem/ChartPieListItem';
import { ChartPieItem } from '../../components/ChartPieItem/ChartPieItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);



export const ChartPie = ({ usedLanguages, loading }) => {

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
      backgroundColor: colors,
      hoverOffset: 4
    }]
  };

  const chartOptions =  {
    plugins: {
        legend: {
          display: false,
        },
    }
  }

  return (
    <>
      {
        loading ?
        <div className="pieChart loading">
            <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
        </div> :
        null
      }
      { 
        !loading ?        
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
        </div> :
        null
        
      }
    </>
  )
}


ChartPie.propTypes = {
    usedLanguages: PropTypes.array,
    loading: PropTypes.bool,
};
  