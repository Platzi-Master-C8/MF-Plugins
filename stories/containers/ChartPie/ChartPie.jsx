import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { ChartPieItem } from '../../components/ChartPieItem/ChartPieItem';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../globals.css";
import './ChartPie.css';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

export const ChartPie = () => {
   
    return (
        <>
            <div className="pieChart-container">
                <Pie data={data} />;
            </div>


        </>
    )
}


ChartPie.propTypes = {
    userName: PropTypes.string,
    currentToken: PropTypes.string,
    loading: PropTypes.bool,
    errorInGetLogin: PropTypes.bool,
    getToken: PropTypes.func,
};
  