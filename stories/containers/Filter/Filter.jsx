import React from "react";
import Checkboxes from "../Checkboxes/Checkboxes";
import { ChartButton } from "../../components/ChartPieButton/ChartButton";

import "../../globals.css";
import "./Filter.css";

const args1 = {
    title: "Data to show",
    props: {
        name: "Lenguages",
        checked: true,
    }
}

const args2 = {
    title: "Data to track",
    props: {
        name: "Time programming",
        checked: true,
    }
}

const Filter = () => (
    <section className="filter">
        <Checkboxes {...args1}/>
        <Checkboxes {...args2}/>
        <ChartButton />
    </section>
);

export default Filter;