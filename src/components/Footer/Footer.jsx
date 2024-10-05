// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-[#e4e4e7]">
//         <div className="container p-6 mx-auto">
//           <div className="lg:flex">
//             <div className="w-full -mx-6 lg:w-2/5">
//               <div className="px-6">
//                 <a href="#">
//                   <img src="./inside.png" className="size-24" alt="" />
//                 </a>

//                 <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
//                   We Offer the best interior design services.
//                 </p>

//                 <div className="flex mt-6 -mx-2">
//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                     aria-label="Reddit"
//                   >
//                     <svg
//                       className="w-5 h-5 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
//                     </svg>
//                   </a>

//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       className="w-5 h-5 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>

//                   <a
//                     href="#"
//                     className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                     aria-label="Github"
//                   >
//                     <svg
//                       className="w-5 h-5 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 lg:mt-0 lg:flex-1">
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 <div>
//                   <h3 className="text-gray-700 uppercase">About</h3>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     Company
//                   </a>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     community
//                   </a>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     Careers
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="text-gray-700 uppercase">Blog</h3>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     Tec
//                   </a>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     Music
//                   </a>
//                   <a
//                     href="#"
//                     className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
//                   >
//                     Videos
//                   </a>
//                 </div>

//                 <div>
//                   <h3 className="text-gray-700 uppercase">Contact</h3>
//                   <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
//                     +1 526 654 8965
//                   </span>
//                   <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
//                     interior@designer.com
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

//           <div>
//             <p className="text-center text-gray-500 dark:text-gray-400">
//               © Inside 2024 - All rights reserved
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";

export default function App() {
  return (
    <footer className="font-poppins bg-zinc-500 text-center text-white  lg:text-left w-full">
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <Link to={"/"}>
              <img src="./inside.png" alt="logo" className="size-20" />
            </Link>
            <h6 className="flex items-center justify-center font-semibold uppercase md:justify-start">
              {/* Branding */}
              <Link to={"/"}>Inside Interior</Link>
            </h6>
            {/* <p>
              Inside interior is a company engaged in the field of interior
              design. We provide the best interior design for your home.
            </p> */}
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link to={"/"} className="text-gray-300 hover:underline">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link to={"/services"} className="text-gray-300 hover:underline">
                Services
              </Link>
            </p>
            <p className="mb-4">
              <Link to={"/about"} className="text-gray-300 hover:underline">
                About
              </Link>
            </p>
            <p>
              <Link to={"/contact"} className="text-gray-300 hover:underline">
                Contact
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              We are Social
            </h6>
            <p className="mb-4">
              <Link
                target="_blank"
                to="https://www.instagram.com/webwisedigitalpvtltd/"
                className="text-gray-300 hover:underline"
              >
                Instagram
              </Link>
            </p>
            <p className="mb-4">
              <Link
                target="_blank"
                to="https://www.facebook.com/people/WebWise-Digital-Pvt-Ltd/61552903648554/"
                className="text-gray-300 hover:underline"
              >
                Facebook
              </Link>
            </p>
            <p className="mb-4">
              <Link
                target="_blank"
                to="https://twitter.com/WebwiseD"
                className="text-gray-300 hover:underline"
              >
                Twitter
              </Link>
            </p>
            <p>
              <Link
                to="https://www.linkedin.com/company/webwise-digital-pvt-ltd"
                target="_blank"
                className="text-gray-300 hover:underline"
              >
                LinkedIn
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <Link to="mailto:support@webwisedigital.in">
                designer@insideinterior.in
              </Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +91-9953775715
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                  clipRule="evenodd"
                />
              </svg>
              +91-9953775715
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              India
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-zinc-900 p-6 text-center">
        <span>© Copyright 2024 </span>
        <Link className="text-gray-400" to={"/"}>
          insideinterior, Inc. All Rights Reserved
        </Link>
      </div>
    </footer>
  );
}
