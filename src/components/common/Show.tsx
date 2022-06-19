import React from "react";


export const Show = ({ when, children }) => {
    if (!when) {
        return null;
    }
    return (
        <>{children}</>
    );
};
