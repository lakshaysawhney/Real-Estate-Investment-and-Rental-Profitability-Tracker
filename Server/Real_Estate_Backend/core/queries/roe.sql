SELECT
    p.property_id, p.address,
    ((COALESCE(SUM(r.monthly_rent) * 12, 0) - COALESCE(SUM(e.amount), 0)) / t.amount) * 100 AS ROE
FROM Properties p
JOIN Transactions t ON p.property_id = t.property_id AND t.type = 'purchase'
LEFT JOIN Rentals r ON p.property_id = r.property_id
LEFT JOIN Expenses e ON p.property_id = e.property_id
GROUP BY p.property_id, p.address, t.amount
