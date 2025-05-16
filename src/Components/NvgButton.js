import React from "react";
import "./CSS/NvgButton.css";

const NvgButton = ({ bImg, wImg, Link, className = "" }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <a
            className={`nvg-button ${className}`}
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "inline-block",
                backgroundImage: `url(${hover ? wImg : bImg})`,
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        > </a>
    );
};

export default NvgButton;