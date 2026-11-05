import {createClient} from "@supabase/supabase-js";
export function db(){const u=process.env.SUPABASE_URL,k=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!u||!k)throw new Error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.");return createClient(u,k,{auth:{persistSession:false,autoRefreshToken:false}});}
