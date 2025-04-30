SELECT city, neighbourhood, growth_rate
FROM Market_Trends
ORDER BY growth_rate DESC
FETCH FIRST 5 ROWS ONLY
