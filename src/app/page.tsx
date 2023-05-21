"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function Home({ params }: { params: any }) {
   console.log(params);
   const searchParams = useSearchParams();
   const [userType, setUserType] = useState(searchParams.get("iama") || "eater");
   return (
      <main className="flex min-h-screen flex-col items-center justify-start px-5 xl:px-36 bg-neutral-900 overflow-hidden relative">
         <div className="fixed bottom-4 right-4 h-12 w-64 border border-pink-500 rounded-xl flex flex-row items-cente text-white p-1">
            <button
               onClick={() => {
                  setUserType("eater");
               }}
               style={{
                  opacity: userType !== "restaurant" ? 1 : 0.5,
               }}
               className="w-1/2 grid place-items-center bg-neutral-700 rounded-md h-full mr-1 transition"
            >
               🍴 Eater
            </button>
            <button
               onClick={() => {
                  setUserType("restaurant");
               }}
               style={{
                  opacity: userType === "restaurant" ? 1 : 0.5,
               }}
               className="w-1/2 grid place-items-center bg-neutral-700 rounded-md h-full ml-1 transition "
            >
               👩‍🍳 Restaurant
            </button>
         </div>
         {userType === "restaurant" ? (
            <>
               <div className=" text-6xl sm:text-6xl text-center md:text-9xl  xl:leading-[1]  text-white font-bold pt-12">
                  <p
                     style={{
                        color: "transparent",
                        // webkitBackgroundClip: "text",
                        backgroundClip: "text",
                     }}
                     className="relative z-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent   font-bold "
                  >
                     {/* showcase your best food */}
                     <span className="text-white "> Showcase Your Best Options</span> To New Customers
                     {/* small bites, <span className="text-white">everywhere you go</span> */}
                  </p>
               </div>
               <p className="mx-auto text-sm  xl:text-2xl mt-8 px-[5%] text-center sm:mt-10 sm:max-w-md sm:px-0 md:mt-12 md:max-w-lg xl:mt-14 xl:max-w-xl text-white">
                  drive in-store traffic 🚶🏽‍♂️, increase brand awareness 😎 and delight your customers with nibble 🍽️, the subscription-based food
                  sampling service.
               </p>

               <a href="https://forms.gle/HgNNmuoXCSvJRdVk7">
                  <div className="text-black bg-white mt-10 px-4 py-2 rounded-full text-center lg:text-left  flex flex-row items-center">
                     <p>request access at your quick-serve restaurant</p>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-2"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                     </svg>
                  </div>
               </a>
            </>
         ) : (
            <>
               <div className=" text-6xl sm:text-6xl text-center md:text-9xl  xl:leading-[1]  text-white font-bold pt-12">
                  <p
                     style={{
                        color: "transparent",
                        // webkitBackgroundClip: "text",
                        backgroundClip: "text",
                     }}
                     className="relative z-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent   font-bold "
                  >
                     {/* showcase your best food */}
                     Small Bites, <span className="text-white">Everywhere You Go</span>
                  </p>
               </div>
               <p className="mx-auto text-sm  xl:text-2xl mt-8 px-[5%] text-center sm:mt-10 sm:max-w-md sm:px-0 md:mt-12 md:max-w-lg xl:mt-14 xl:max-w-xl text-white">
                  Passing by your favorite coffee shop and just wanna nibble? 🚶🏽‍♂️ Walking past a new boba store and wanna entertain your taste buds? 👅
               </p>

               <a href="https://forms.gle/HgNNmuoXCSvJRdVk7">
                  <div className="text-black bg-white mt-10 px-4 py-2 rounded-full  flex flex-row items-center">
                     <p>Join Nibble Today</p>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-2"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                     </svg>
                  </div>
               </a>
            </>
         )}
      </main>
   );
}
