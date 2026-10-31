# API (base /api, JWT in `Authorization: Bearer <token>`)
POST /auth/login {email,password} → {token,user} · GET /auth/me · GET /dashboard
CRUD (GET / · POST / · GET /:id · PUT /:id · DELETE /:id) on: customers, surveys, packages, quotations, payments, inventory, dispatch, installations, technicians, warranty, tickets, finance, subsidy
Quotations: send `bom` and totals (subtotal, 8.9% GST, total) are calculated server-side.
Inventory: send category panel/inverter/meter + quantity and serials are generated.
POST /installations/:id/photo and /signature (multipart field `file`, images ≤ 8 MB) · GET /warranty/passport/:installationId → data + QR code
Setting an installation status to "Completed" issues warranties.
