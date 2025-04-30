SELECT * FROM (
    SELECT
        p.property_id, p.address,
        COALESCE(SUM(r.monthly_rent * 12), 0) - COALESCE(SUM(e.amount), 0) AS annual_cash_flow
    FROM Properties p
    LEFT JOIN Rentals r ON p.property_id = r.property_id
    LEFT JOIN Expenses e ON p.property_id = e.property_id
    GROUP BY p.property_id, p.address
) sub WHERE annual_cash_flow < 0
