import React from "react";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";

import "../../globals.css";
import "./Repository.css";

let btnargs = {
    name: "GitHub repo"
}

const Repository = ({ projectName, content }) => (
    <section className="repository">
        <article className="repository__text">
            <h2>{ projectName }</h2>
            <p>{ content }</p>
        </article>

        <ButtonCTA {...btnargs} />
    </section>
);

export default Repository;