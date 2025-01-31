import React from "react";

const MobileToggle : React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none" {...props}>
                <path d="M4.32031 26.125V23.375H29.0703V26.125H4.32031ZM4.32031 17.875V15.125H29.0703V17.875H4.32031ZM4.32031 9.625V6.875H29.0703V9.625H4.32031Z" fill="white" />
            </svg>
    );
}

export default MobileToggle;