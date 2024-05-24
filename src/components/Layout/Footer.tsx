import React from "react";

export default function Footer() {
  return (
    <footer
      className="min-h-12 bg-white flex justify-center items-center box-shadow-[rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
      }}
    >
      <p className="text-center font-semibold">
        Copyright © 2024 Nguyen Dang Duc.
      </p>
    </footer>
  );
}

