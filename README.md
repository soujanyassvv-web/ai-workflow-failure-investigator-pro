# AI Workflow Failure Investigator Pro
A private Next.js dashboard for your n8n `public.workflow_failures` table.

## Run locally
1. Install Node.js 20.9+.
2. Extract this folder and open it in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Fill in your Supabase project URL, server-side Secret/service_role key, a strong dashboard password, and a random AUTH_SECRET (32+ characters).
6. Run `npm run dev` and open http://localhost:3000.

The Supabase key is used only by server API routes. Never expose it in browser code or commit `.env.local`.

The dashboard displays the latest 200 records and supports search, severity/status filters, CSV export, incident details and status updates (`new`, `investigating`, `resolved`).

Before selling this to multiple customers, implement real customer authentication, tenant isolation, per-tenant RLS, rate limiting and audit logging. This password-protected build is for a private demo/internal dashboard, not a multi-tenant production SaaS.
