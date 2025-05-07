SELECT
    p.property_id,
    p.address,
    ROUND(((COALESCE(r.total_rent, 0) * 12 - COALESCE(e.total_expense, 0)) / 
           NULLIF(p.current_value, 0)) * 100, 2) AS ROE
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
--     p.property_id,
--     p.address,
--     ROUND(((COALESCE(SUM(r.monthly_rent) * 12, 0) - COALESCE(SUM(e.amount), 0)) / 
--     NULLIF(p.current_value, 0)) * 100, 2) AS ROE
-- FROM Properties p
-- LEFT JOIN Rentals r ON p.property_id = r.property_id
-- LEFT JOIN Expenses e ON p.property_id = e.property_id
-- GROUP BY p.property_id, p.address, p.current_value

-- ROE = For current market value of this property, how much returns the investor is making annually
-- ROE = (Net income / Current Value of Property) * 100
-- group by current_value is also needed since it is also selected but not aggregated