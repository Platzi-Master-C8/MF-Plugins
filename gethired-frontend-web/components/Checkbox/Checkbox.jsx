import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, checked, onChecked }) => (
    <div className="checkbox">
        <label>
            { name }
            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    // checked={ checked } 
                    defaultChecked={true}
                    // onClick={onChecked}
                />
                <span className="styledCheckbx"></span>
            </div>
        </label>
    </div>
);

export default Checkbox;

Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
}