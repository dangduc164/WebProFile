import Link from "next/link";
import React, { useEffect, useState } from "react";

import generatePDF, { dataPDF } from "~/redux/generatePDF";

export default function Header({ props }) {
  console.log(props);

  const avatar = props?.infor?.image_avatar;
  const name = props?.infor?.full_name;
  // const [data, setdata] = useState<dataPDF>();
  const data = {
    filename: name,
    html: ""
  }

  const hanldeGeneratePDF = async () => {
    const elements = document.getElementsByClassName("main-body");
    if (elements.length > 0) {
      const firstElement = elements[0];
      const a = firstElement.innerHTML;
      data.html = a

      console.log("111111",data);
      
      
      await generatePDF(data);
    }

    // await generatePDF(data);
  };

  return (
    <>
      {/* <div>
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded">
            <li className="inline-block px-2 py-2 text-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block px-2 py-2 text-gray-700">
              <Link href="/Contact">Contact</Link>
            </li>
            <li
              className="inline-block px-2 py-2 text-gray-700 active"
              aria-current="page"
            >
              <Link href="/About">About</Link>
            </li>
          </ol>
        </nav>
      </div> */}
      <div className="c-nav p-3 bg-white sticky top-0 z-10">
        <div className="flex items-center justify-end">
          <div className="avatar flex items-center gap-2 cursor-pointer">
            <img
              className="rounded-full w-8 h-8"
              src={process.env.NEXT_PUBLIC_API_URL + avatar}
              alt="avatar"
            />
            <i className="fa-solid fa-caret-down" />
          </div>
          <div className="c-nav_item">
            <ul>
              <li>
                <link href="/my-page" />
                My page
              </li>
              <li>
                <span onClick={hanldeGeneratePDF}>Download PDF</span>
              </li>
            </ul>
            <button className="c-btn c-btn-logout">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
