import {createHmac,timingSafeEqual} from "node:crypto";
import {cookies} from "next/headers";
export const COOKIE="awfi_session";
export function token(){const exp=String(Math.floor(Date.now()/1000)+43200);return exp+"."+sign(exp);}
function sign(v:string){const s=process.env.AUTH_SECRET;if(!s||s.length<32)throw new Error("AUTH_SECRET must be at least 32 characters.");return createHmac("sha256",s).update(v).digest("hex");}
export function valid(t?:string){if(!t)return false;const [p,s]=t.split(".");if(!p||!s||!/^[0-9]+$/.test(p)||Number(p)<Date.now()/1000)return false;const a=Buffer.from(s),b=Buffer.from(sign(p));return a.length===b.length&&timingSafeEqual(a,b);}
export async function signedIn(){return valid((await cookies()).get(COOKIE)?.value);}
