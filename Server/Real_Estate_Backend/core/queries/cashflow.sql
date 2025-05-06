SELECT
    p.property_id,
    p.address,
    COALESCE(r.total_rent, 0) - COALESCE(e.total_expense, 0) AS annual_cash_flow
FROM Properties p
LEFT JOIN (
    SELECT property_id, SUM(monthly_rent * 12) AS total_rent
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
--     COALESCE(SUM(r.monthly_rent * 12), 0) - COALESCE(SUM(e.amount), 0) AS annual_cash_flow
-- FROM Properties p
-- LEFT JOIN Rentals r ON p.property_id = r.property_id
-- LEFT JOIN Expenses e ON p.property_id = e.property_id
-- GROUP BY p.property_id, p.address

-- COALESCENCE -> for handling null values if rent or expense is null 
-- LEFT JOIN coz we want to consider properties with no rentals or expenses as well
-- group by property id coz we are calculating for the particular property
-- group by address coz it is a non aggregated column