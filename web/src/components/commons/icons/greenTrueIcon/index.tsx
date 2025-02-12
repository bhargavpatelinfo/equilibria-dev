import React from "react";

const GreenTrueIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
            <mask id="mask0_230_434" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_230_434)">
                <path d="M8.93324 24L1.3999 16.4667L3.2999 14.6L10.8332 22.1333L8.93324 24ZM16.4666 24L8.93324 16.4667L10.7999 14.5667L16.4666 20.2333L28.7332 7.96667L30.5999 9.86667L16.4666 24ZM16.4666 16.4667L14.5666 14.6L21.1666 8.00001L23.0666 9.86667L16.4666 16.4667Z" fill="#4ED21E" />
            </g>
        </svg>
    );
}

export default GreenTrueIcon;