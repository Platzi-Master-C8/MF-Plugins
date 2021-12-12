import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";



const Checkboxes = ({ title, props, onChecked }) => {

    return (
        <section className="checkboxes">
            <h2>{ title }</h2>
            {
                props ? 
                props.map(config => (
                    
                    <Checkbox {...config} key={config.name} onChecked={onChecked}/>
                )) :
                null
            }
        </section>
    )
};

export default Checkboxes;