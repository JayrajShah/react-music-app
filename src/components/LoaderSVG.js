import React from "react";

const LoaderSVG = () => {
  const DURATION = "1.0s";
  const OFFSET = 0.2; //apply --> .toStirng() + "s"
  const FILL = "#27282e";
  return (
    <div>
      <svg
        style={{ width: 58, height: 58 }}
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // xmlns:xlink=
        x="0px"
        y="0px"
        viewBox="18 51 28 28"
        // enable-background="new 100 100 100 100"
        xmlSpace="preserve"
        // xml:space="preserve"
      >
        <rect x="20" y="50" width="4" height="10" fill={FILL}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur={DURATION}
            repeatCount="indefinite"
          />
        </rect>
        <rect x="30" y="50" width="4" height="10" fill={FILL}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur={DURATION}
            repeatCount="indefinite"
          />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill={FILL}>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur={DURATION}
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default LoaderSVG;
