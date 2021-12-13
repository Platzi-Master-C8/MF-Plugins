import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import Checkboxes from "../Checkboxes/Checkboxes";
import { ChartButton } from "../../components/ChartPieButton/ChartButton";

import "react-loading-skeleton/dist/skeleton.css";

const args1 = {
    title: "Data to show",
    props: [
        {
            name: "Development time",
            checked: true,
        },
        {
            name: "Languages",
            checked: true,
        },
        {
            name: "Projects worked",
            checked: true,
        },
        {
            name: "Operative system",
            checked: true,
        }
    ]
}

const args2 = {
    title: "Data to track",
    props: [
        {
            name: "Development time",
            checked: true,
        },
        {
            name: "Languages",
            checked: true,
        },
        {
            name: "Projects worked",
            checked: true,
        },
        {
            name: "Operative system",
            checked: true,
        }
    ]
}



const Filter = ({ loading }) => (
    <React.Fragment>
        {
            loading ?
            <section className="loading">
                <Skeleton containerClassName="loading-skeletonContainer" className="skeleton-item"/>
            </section> :
            null
        }
        {
            !loading ?
            <section className="filter">
                <Checkboxes {...args1} onChecked={() => console.log('check')}/>
                <Checkboxes {...args2} onChecked={() => console.log('check')}/>
                <ChartButton />
            </section> :
            null
        }
    </React.Fragment>

);

export default Filter;

Filter.propTypes = {
    loading: PropTypes.bool,
}