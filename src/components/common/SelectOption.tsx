import React from "react";

export const SelectOption = ({ value, children }) => {
    return (
        <option value={value} >{children}</option>
    );
};
