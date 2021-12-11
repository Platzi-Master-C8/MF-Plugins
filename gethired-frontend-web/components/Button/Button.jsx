import React from 'react';
import PropTypes from 'prop-types';



export const Button = ({ name, onClick }) => {

    return (
        <>
            <button 
                className="getToken-button"
                type="button"
                onClick={onClick}
            >
                {name}
            </button>
        </>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
};
  