SELECT
    p.property_id, address,
    (NVL(SUM(r.monthly_rent), 0) * 12 - NVL(SUM(e.amount), 0)) AS cash_flow
FROM Properties p
LEFT JOIN Rentals r ON p.property_id = r.property_id
LEFT JOIN Expenses e ON p.property_id = e.property_id
GROUP BY p.property_id, address
