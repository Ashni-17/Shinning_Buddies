# Database design
Tables: users, customers, site_surveys, packages, quotations, payments, inventory_items, technicians, installations, dispatches, warranties, service_tickets, finance_entries, subsidies.
Customer is the root; surveys, quotations, payments, installations, tickets and subsidies cascade-delete with it. Quotation `bom` is JSON: [{item, qty, unit_price}].
Completing an installation auto-creates four warranty rows (panels 25y, inverter 10y, structure 10y, workmanship 5y).
