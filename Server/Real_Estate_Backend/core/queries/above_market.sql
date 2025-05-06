SELECT
    r.tenant_name,
    p.address,
    r.monthly_rent,
    mt.market_estimated_rent
FROM Rentals r
JOIN Properties p ON r.property_id = p.property_id
JOIN (
    SELECT
        p.city,
        p.neighbourhood,
        mt.avg_rent_per_sqft * MAX(p.property_size) AS market_estimated_rent
    FROM Properties p
    JOIN Market_Trends mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
    GROUP BY p.city, p.neighbourhood, mt.avg_rent_per_sqft
) mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
WHERE r.monthly_rent > mt.market_estimated_rent


-- SELECT
--     r.tenant_name, p.address, r.monthly_rent,
--     mt.avg_rent_per_sqft * p.property_size AS market_estimated_rent
-- FROM Rentals r
-- JOIN Properties p ON r.property_id = p.property_id
-- JOIN Market_Trends mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
-- WHERE r.monthly_rent > mt.avg_rent_per_sqft * p.property_size