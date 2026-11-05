import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Failure Investigator Pro",description:"Workflow reliability operations console"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
