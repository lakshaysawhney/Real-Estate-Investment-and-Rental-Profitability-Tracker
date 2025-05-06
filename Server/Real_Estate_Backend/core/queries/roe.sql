SELECT
    p.property_id,
    p.address,
    ROUND(
        (
            COALESCE(r.total_rent, 0) * 12 - COALESCE(e.total_expense, 0)
        ) / t.amount * 100, 2
    ) AS ROE
FROM Properties p
JOIN Transactions t ON p.property_id = t.property_id AND t.type = 'purchase'
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

-- ROE = For current market value of this property, how much returns the investor is making annually
-- ROE = (Net income / Current Value of Property) * 100
-- group by current_value is also needed since it is also selected but not aggregated