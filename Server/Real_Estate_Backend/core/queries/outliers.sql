SELECT p.address, t.amount AS purchase_price
FROM Properties p
JOIN Transactions t ON p.property_id = t.property_id
WHERE t.type = 'purchase'
  AND t.amount > (
    SELECT AVG(amount) + 2 * STDDEV(amount)
    FROM Transactions
    WHERE type = 'purchase'
  )