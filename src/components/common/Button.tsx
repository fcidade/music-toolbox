import React from "react";


export const Button = ({ text, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`btn btn-outline-dark`}
            style={{width: '100%'}}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
