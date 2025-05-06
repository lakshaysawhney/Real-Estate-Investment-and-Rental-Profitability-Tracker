SELECT
    p.property_id, p.address,
    (NVL(SUM(r.monthly_rent), 0) - (NVL(SUM(e.amount), 0) / 12)) AS cash_flow
FROM Properties p
LEFT JOIN Rentals r ON p.property_id = r.property_id
LEFT JOIN Expenses e ON p.property_id = e.property_id
GROUP BY p.property_id, p.address

-- NVL is Oracle's version of COALESCE