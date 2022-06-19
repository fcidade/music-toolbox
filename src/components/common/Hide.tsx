import React from "react";


export const Hide = ({ when, children }) => {
    if (when) {
        return null;
    }
    return (
        <>{children}</>
    );
};
