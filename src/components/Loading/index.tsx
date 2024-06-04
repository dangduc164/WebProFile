import React from "react";

export default function Loading() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full screen h-screen z-50 bg-opacity-60 bg-black flex items-center justify-center">
        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
          <circle
            className="pl__ring pl__ring--a"
            cx="120"
            cy="120"
            r="105"
            fill="none"
            stroke="#000"
            stroke-width="20"
            stroke-dasharray="0 660"
            stroke-dashoffset="-330"
            stroke-linecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--b"
            cx="120"
            cy="120"
            r="35"
            fill="none"
            stroke="#000"
            stroke-width="20"
            stroke-dasharray="0 220"
            stroke-dashoffset="-110"
            stroke-linecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--c"
            cx="85"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            stroke-width="20"
            stroke-dasharray="0 440"
            stroke-linecap="round"
          ></circle>
          <circle
            className="pl__ring pl__ring--d"
            cx="155"
            cy="120"
            r="70"
            fill="none"
            stroke="#000"
            stroke-width="20"
            stroke-dasharray="0 440"
            stroke-linecap="round"
          ></circle>
        </svg>
      </div>
    </>
  );
}
