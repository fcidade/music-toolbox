import React from "react";


export const Checkbox = ({ label, value, checked, onChange }) => {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input"
                type="checkbox"
                id={`checkbox-${value}`}
                value={value}
                checked={checked}
                onChange={onChange} />
            <label className="form-check-label" htmlFor={`checkbox-${value}`}>{label}</label>
        </div>
    );
};
