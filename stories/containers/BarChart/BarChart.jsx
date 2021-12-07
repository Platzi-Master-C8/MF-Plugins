import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

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

import "../../globals.css";
import "./BarChart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const data = {
    labels: ["HTML", "JavaScript", "TypeScript", "CSS"],
    datasets: [
        {
            label: "Time spent programming",
            backgroundColor: "#555BFF",
            data: [65, 59, 80, 81],
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 32
        }
    ]
}

const options = {
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            grid: {
            display: false
            }
        }
    },
}

export const BarChart = ({ loading }) => (
    <React.Fragment>
        {
            loading?
            <section className="barchartContainer">
                <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
            </section>
            : null
        }
        {
            !loading ?
            <section className="barchartContainer">
                <Bar options={options} data={data} />
            </section>
            : null
        }
    </React.Fragment>
)

BarChart.propTypes = {
    loading: PropTypes.bool,
}