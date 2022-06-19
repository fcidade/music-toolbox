import React, { MouseEventHandler } from "react";

export type ButtonProps = {
    text: string
    onClick: MouseEventHandler
    disabled?: boolean
    fullWidth?: boolean
}

export const Button = ({ text, onClick, disabled, fullWidth }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`btn btn-outline-dark ${fullWidth ? 'full-width' : ''}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
