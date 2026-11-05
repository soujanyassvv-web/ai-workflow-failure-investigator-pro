import {redirect} from "next/navigation";import {signedIn} from "@/lib/auth";import Dashboard from "@/components/dashboard";
export default async function Home(){if(!(await signedIn()))redirect("/login");return <Dashboard/>}
