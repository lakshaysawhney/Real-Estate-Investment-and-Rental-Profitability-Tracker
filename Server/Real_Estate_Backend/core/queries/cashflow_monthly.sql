SELECT
    p.property_id,
    p.address,
    NVL(r.total_rent, 0) - (NVL(e.total_expense, 0) / 12) AS cash_flow
FROM Properties p
LEFT JOIN (
    SELECT property_id, SUM(monthly_rent) AS total_rent
    FROM Rentals
    GROUP BY property_id
) r ON p.property_id = r.property_id
LEFT JOIN (
    SELECT property_id, SUM(amount) AS total_expense
    FROM Expenses
    GROUP BY property_id
) e ON p.property_id = e.property_id


-- SELECT
--     p.property_id, p.address,
--     (NVL(SUM(r.monthly_rent), 0) - (NVL(SUM(e.amount), 0) / 12)) AS cash_flow
-- FROM Properties p
-- LEFT JOIN Rentals r ON p.property_id = r.property_id
-- LEFT JOIN Expenses e ON p.property_id = e.property_id
-- GROUP BY p.property_id, p.address

-- NVL is Oracle's version of COALESCE