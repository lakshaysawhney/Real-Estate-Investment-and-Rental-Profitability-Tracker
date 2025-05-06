SELECT
    u.name,
    AVG(e.avg_expense) AS avg_expense
FROM Users u
JOIN Properties p ON u.user_id = p.user_id
JOIN (
    SELECT property_id, AVG(amount) AS avg_expense
    FROM Expenses
    GROUP BY property_id
) e ON p.property_id = e.property_id
GROUP BY u.user_id, u.name

-- SELECT u.name, AVG(e.amount) AS avg_expense
-- FROM Users u
-- JOIN Properties p ON u.user_id = p.user_id
-- JOIN Expenses e ON p.property_id = e.property_id
-- GROUP BY u.user_id, u.name
