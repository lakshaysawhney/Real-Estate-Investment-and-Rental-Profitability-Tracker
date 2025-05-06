SELECT p.address, SUM(e.amount) AS total_expense
FROM Properties p
LEFT JOIN Rentals r ON p.property_id = r.property_id
JOIN Expenses e ON p.property_id = e.property_id
WHERE r.rental_id IS NULL
GROUP BY p.property_id, p.address
HAVING SUM(e.amount) > 5000