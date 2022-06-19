import React from "react";
import { SectionTitle } from "./SectionTitle";


export const Section = ({ title, children }) => {
    return (
        <div className="nes-container with-title section">
            <SectionTitle>{title}</SectionTitle>
            {children}
        </div>
    );
};
