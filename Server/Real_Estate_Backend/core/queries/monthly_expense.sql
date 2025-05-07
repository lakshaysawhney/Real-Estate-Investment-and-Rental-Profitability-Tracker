SELECT
    TO_CHAR(e.expense_date, 'YYYY-MM') AS month,
    SUM(e.amount) AS total_expense
FROM Expenses e
GROUP BY TO_CHAR(e.expense_date, 'YYYY-MM')
ORDER BY month