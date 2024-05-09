import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container mx-auto sm:px-4">
        <div className="main-body">
          {/* Breadcrumb */}
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
          {/* /Breadcrumb */}
          <div className="flex flex-wrap  gutters-sm mx-[-1rem]">
            <div className="md:w-1/3 pr-4 pl-4 mb-3">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <div className="flex-auto p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-full"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-gray-600 mb-1">Full Stack Developer</p>
                      <p className="text-gray-700 font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      {/* <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                        Follow
                      </button>
                      <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600">
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mt-3">
                <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Website
                    </h6>
                    <span className="text-gray-600">https://bootdey.com</span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Github
                    </h6>
                    <span className="text-gray-600">bootdey</span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter mr-2 icon-inline text-teal-500"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-gray-600">@bootdey</span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-red-600"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-gray-600">bootdey</span>
                  </li>
                  <li className="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-blue-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-gray-600">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/3 pr-4 pl-4">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-3">
                <div className="flex-auto p-6">
                  <div className="flex flex-wrap ">
                    <div className="sm:w-1/4 pr-4 pl-4">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="sm:w-3/4 pr-4 pl-4 text-gray-600">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap ">
                    <div className="sm:w-1/4 pr-4 pl-4">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="sm:w-3/4 pr-4 pl-4 text-gray-600">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap ">
                    <div className="sm:w-1/4 pr-4 pl-4">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="sm:w-3/4 pr-4 pl-4 text-gray-600">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap ">
                    <div className="sm:w-1/4 pr-4 pl-4">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="sm:w-3/4 pr-4 pl-4 text-gray-600">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap ">
                    <div className="sm:w-1/4 pr-4 pl-4">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="sm:w-3/4 pr-4 pl-4 text-gray-600">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr />
                  {/* <div className="flex flex-wrap ">
                    <div className="sm:w-full pr-4 pl-4">
                      <a
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-teal-500 text-white hover:bg-teal-600 "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-wrap  gutters-sm mx-[-1rem]">
                <div className="sm:w-1/2 pr-4 pl-4 mb-3">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 h-full">
                    <div className="flex-auto p-6">
                      <h6 className="flex items-center mb-3">
                        <i className="material-icons text-teal-500 mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2 pr-4 pl-4 mb-3">
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 h-full">
                    <div className="flex-auto p-6">
                      <h6 className="flex items-center mb-3">
                        <i className="material-icons text-teal-500 mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-blue-600"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
