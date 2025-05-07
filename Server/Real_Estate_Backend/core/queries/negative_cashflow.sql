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
WHERE COALESCE(r.total_rent, 0) - COALESCE(e.total_expense, 0) < 0


