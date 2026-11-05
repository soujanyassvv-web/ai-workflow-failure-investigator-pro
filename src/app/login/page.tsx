import {redirect} from "next/navigation";import {signedIn} from "@/lib/auth";import Login from "@/components/login";
export default async function Page(){if(await signedIn())redirect("/");return <Login/>}
