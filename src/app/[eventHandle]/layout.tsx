import "../../app/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
   //  const event = await getEvent();
   //  console.log(event);
   return (
      <div className="flex flex-col h-screen">
         {/* <div className=" lg:py-8 py-6 border-b border-neutral-700  flex flex-row lg:justify-start justify-center items-center lg:px-36 bg-black ">
          
            <Link href={"/"}>
               <svg className="lg:h-5 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 630 70">
                  <path
                     fill-rule="evenodd"
                     d="M456.33 6.5c-1.924-3.33333-6.736-3.33333-8.66 0l-31.177 54c-1.925 3.3333.481 7.5 4.33 7.5h13.697l31.311-45.0437L456.33 6.5Zm12.817 22.1988L441.827 68h7.644l23.144-33.294-3.468-6.0072Zm6.783 11.7497L456.778 68h7.169l15.236-21.9181-3.253-5.6334Zm6.568 11.3759L471.254 68h11.923c3.849 0 6.255-4.1667 4.33-7.5l-5.009-8.6756Z"
                     clip-rule="evenodd"
                  />
                  <path d="M.391998 69V1.32H9.608l36.384 47.232V1.32h11.424V69h-9.12l-36.48-47.424V69H.391998ZM82.2845 69V1.32h12.288V69h-12.288ZM151.909 69.96c-7.488 0-13.825-1.408-19.009-4.224-5.12-2.816-9.023-6.816-11.711-12-2.688-5.184-4.032-11.328-4.032-18.432 0-7.168 1.376-13.344 4.128-18.528 2.751-5.248 6.72-9.28 11.904-12.096C138.373 1.8 144.58.359997 151.812.359997c4.737 0 9.185.704003 13.345 2.112003 4.16 1.344 7.616 3.232 10.368 5.664l-4.129 9.6c-3.007-2.368-6.079-4.064-9.215-5.088s-6.592-1.536-10.369-1.536c-7.168 0-12.607 2.08-16.319 6.24-3.648 4.16-5.472 10.144-5.472 17.952 0 7.872 1.888 13.856 5.664 17.952 3.776 4.096 9.376 6.144 16.8 6.144 2.112 0 4.256-.16 6.432-.48 2.24-.384 4.448-.928 6.624-1.632V41.544h-15.552v-9.12h25.823v32.544c-3.135 1.536-6.847 2.752-11.135 3.648-4.288.896-8.544 1.344-12.768 1.344ZM200.132 69V1.32h12.288v28.224h34.848V1.32h12.288V69h-12.288V39.816H212.42V69h-12.288ZM300.782 69V11.592H277.55V1.32h58.752v10.272H313.07V69h-12.288ZM354.167 69V1.32h29.376c7.424 0 13.152 1.856 17.184 5.568 4.032 3.712 6.048 8.896 6.048 15.552 0 6.656-2.016 11.872-6.048 15.648-4.032 3.712-9.76 5.568-17.184 5.568h-17.088V69h-12.288Zm12.288-35.04h15.168c8.832 0 13.248-3.84 13.248-11.52 0-7.616-4.416-11.424-13.248-11.424h-15.168V33.96ZM531.717 69.96c-5.312 0-10.24-.672-14.784-2.016-4.544-1.408-8.383-3.296-11.519-5.664l3.743-9.696c3.136 2.24 6.56 3.968 10.272 5.184 3.776 1.216 7.872 1.824 12.288 1.824 5.056 0 8.736-.832 11.04-2.496 2.304-1.728 3.456-3.936 3.456-6.624 0-2.24-.832-4-2.496-5.28-1.6-1.28-4.384-2.336-8.352-3.168l-10.56-2.208c-12.032-2.56-18.047-8.736-18.047-18.528 0-4.224 1.119-7.904 3.359-11.04 2.24-3.136 5.344-5.568 9.312-7.296 3.968-1.728 8.544-2.592003 13.728-2.592003 4.608 0 8.928.704003 12.96 2.112003 4.032 1.344 7.392 3.264 10.08 5.76l-3.744 9.216c-5.312-4.48-11.776-6.72-19.392-6.72-4.416 0-7.872.928-10.368 2.784-2.496 1.856-3.744 4.288-3.744 7.296 0 2.304.768 4.16 2.304 5.568 1.536 1.344 4.16 2.4 7.872 3.168l10.464 2.208c6.336 1.344 11.04 3.456 14.112 6.336 3.136 2.88 4.704 6.72 4.704 11.52 0 4.032-1.088 7.584-3.264 10.656-2.176 3.072-5.28 5.472-9.312 7.2-3.968 1.664-8.672 2.496-14.112 2.496ZM602.36 69.96c-5.312 0-10.24-.672-14.784-2.016-4.544-1.408-8.384-3.296-11.52-5.664l3.744-9.696c3.136 2.24 6.56 3.968 10.272 5.184 3.776 1.216 7.872 1.824 12.288 1.824 5.056 0 8.736-.832 11.04-2.496 2.304-1.728 3.456-3.936 3.456-6.624 0-2.24-.832-4-2.496-5.28-1.6-1.28-4.384-2.336-8.352-3.168l-10.56-2.208c-12.032-2.56-18.048-8.736-18.048-18.528 0-4.224 1.12-7.904 3.36-11.04 2.24-3.136 5.344-5.568 9.312-7.296C594.04 1.224 598.616.359997 603.8.359997c4.608 0 8.928.704003 12.96 2.112003 4.032 1.344 7.392 3.264 10.08 5.76l-3.744 9.216c-5.312-4.48-11.776-6.72-19.392-6.72-4.416 0-7.872.928-10.368 2.784-2.496 1.856-3.744 4.288-3.744 7.296 0 2.304.768 4.16 2.304 5.568 1.536 1.344 4.16 2.4 7.872 3.168l10.464 2.208c6.336 1.344 11.04 3.456 14.112 6.336 3.136 2.88 4.704 6.72 4.704 11.52 0 4.032-1.088 7.584-3.264 10.656-2.176 3.072-5.28 5.472-9.312 7.2-3.968 1.664-8.672 2.496-14.112 2.496Z" />
               </svg>
            </Link>
         </div> */}

         {children}
      </div>
   );
}