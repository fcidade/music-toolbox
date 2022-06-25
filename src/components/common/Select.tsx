import React from "react";


export const Select = ({ value, onChange, children }) => {
    return (
        <select className="form-select" onChange={onChange} value={value}>
            {children}
        </select>
    );
};
