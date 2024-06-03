"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Home({ params }: { params: any }) {
   console.log(params);
   const supabaseUrl = "https://dtxxsbupwvgdxvbgilrb.supabase.co";
   const supabaseKey = process.env.SUPABASE_KEY;
   const supabase = createClient(
      supabaseUrl,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0eHhzYnVwd3ZnZHh2YmdpbHJiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjg0MTYyNSwiZXhwIjoyMDMyNDE3NjI1fQ.UBtAFRq4eqVBodOo2ftmQHJ7nmPiat-Hr8gSXJ0Dwu0"
   );

   const searchParams = useSearchParams();
   const [userType, setUserType] = useState(searchParams.get("iama") || "eater");
   const [joinedWaitlist, setJoinedWaitlist] = useState(false);
   const [email, setEmail] = useState("");

   const addEmailToWaitlist = async () => {
      const { data, error } = await supabase.from("waitlist").insert([{ email }]).select();
      if (!error) {
         setJoinedWaitlist(true);
      }
   };

   return (
      <main className="flex min-h-screen flex-col items-center justify-start px-5 xl:px-36 bg-neutral-900 overflow-hidden relative">
         {/* <div
            style={{
               display: searchParams.get("iama") ? "none" : "flex",
            }}
            className="fixed bottom-4 right-4 h-12 w-64 border border-pink-500 rounded-xl  flex-row items-center text-white p-1"
         >
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
         </div> */}
         {false ? (
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
                  Drive in-store traffic 🚶🏽‍♂️, increase brand awareness 😎 and delight your customers with nibble 🍽️, the subscription-based food
                  sampling platform.
               </p>

               <a href="https://forms.gle/HgNNmuoXCSvJRdVk7">
                  <div className="text-black bg-white mt-10 px-4 py-2 rounded-full text-center lg:text-left  flex flex-row items-center">
                     <p>Request Access At Your Quick-Serve Restaurant</p>
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
               <>
                  <div className=" text-6xl sm:text-6xl text-center md:text-8xl  xl:leading-[1]  text-white font-bold pt-12">
                     <p
                        style={{
                           color: "transparent",
                           // webkitBackgroundClip: "text",
                           backgroundClip: "text",
                        }}
                        className="relative z-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent   font-bold "
                     >
                        {/* showcase your best food */}
                        <p>Sign up once.</p> <span className="text-white">Small bites all over NYC</span>
                     </p>
                  </div>
                  <p className="mx-auto text-sm  xl:text-xl mt-8 px-[5%] text-center sm:mt-10 sm:max-w-md sm:px-0 md:mt-12 md:max-w-lg xl:mt-14 xl:max-w-xl text-neutral-300">
                     Tastr is the subscription-based food sampling platform that lets you try the best food in NYC.
                  </p>

                  {!joinedWaitlist ? (
                     <>
                        <input
                           type="email"
                           placeholder="What's your email?"
                           className="bg-transparent focus:outline-purple-500 text-white focus:outline-2 px-3  w-[375px] py-2 rounded-md  outline-purple-500 outline mt-7"
                           value={email}
                           onChange={(e) => {
                              setEmail(e.target.value);
                           }}
                           onKeyDown={() => {
                              if (e.key === "Enter") {
                                 addEmailToWaitlist();
                              }
                           }}
                        />

                        <button
                           onClick={() => {
                              addEmailToWaitlist();
                           }}
                           className="text-black bg-white mt-6 px-4 py-2 rounded-full  flex flex-row items-center"
                        >
                           <p>Join the waitlist</p>
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
                        </button>
                     </>
                  ) : (
                     <p className="mx-auto text-sm  xl:text-xl mt-8 px-[5%] text-center sm:mt-10 sm:max-w-md sm:px-0 md:mt-12 md:max-w-lg xl:mt-14 xl:max-w-xl text-neutral-200">
                        Thank you for joining the waitlist! We'll be in touch soon.
                     </p>
                  )}
               </>
            </>
         )}
      </main>
   );
}
