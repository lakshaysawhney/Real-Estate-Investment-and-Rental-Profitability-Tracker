SELECT
    p.address, p.current_value, mt.growth_rate,
    ROUND(p.current_value * POWER(1 + mt.growth_rate / 100.0, 5), 2) AS projected_value_in_5_years
FROM Properties p
JOIN Market_Trends mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood