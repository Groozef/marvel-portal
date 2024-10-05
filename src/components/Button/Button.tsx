import React, { Component } from 'react';

import "./button.css"

interface ButtonProps {
    long: boolean;
    variant: "MAIN" | "SECONDARY";
    children: React.ReactNode;
    // method: void;
}

class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    

    render() {
        const {
            long,
            variant,
            children
        } = this.props;

        return (
            <button className={`button ${long ? "button__long" : ""} ${variant === "MAIN" ? "button__main" : "button__secondary" }`}>
                <div className="inner">
                    {children}
                </div>
            </button>
        )
    }
}

export default Button;
