SELECT *
FROM (
    SELECT
        property_id,
        TO_CHAR(expense_date, 'YYYY-MM') AS month,
        SUM(amount) AS total,
        RANK() OVER (PARTITION BY property_id ORDER BY SUM(amount) DESC) AS rank
    FROM Expenses
    GROUP BY property_id, TO_CHAR(expense_date, 'YYYY-MM')
)
WHERE rank <= 3