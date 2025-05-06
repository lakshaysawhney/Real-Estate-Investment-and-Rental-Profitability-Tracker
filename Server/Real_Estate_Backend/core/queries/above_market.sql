SELECT
    r.tenant_name,
    p.address,
    r.monthly_rent,
    mt.market_estimated_rent
FROM Rentals r
JOIN Properties p ON r.property_id = p.property_id
JOIN (
    SELECT
        city,
        neighbourhood,
        avg_rent_per_sqft * property_size AS market_estimated_rent
    FROM Properties
    JOIN Market_Trends mt ON Properties.city = mt.city AND Properties.neighbourhood = mt.neighbourhood
) mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
WHERE r.monthly_rent > mt.market_estimated_rent


-- SELECT
--     r.tenant_name, p.address, r.monthly_rent,
--     mt.avg_rent_per_sqft * p.property_size AS market_estimated_rent
-- FROM Rentals r
-- JOIN Properties p ON r.property_id = p.property_id
-- JOIN Market_Trends mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
-- WHERE r.monthly_rent > mt.avg_rent_per_sqft * p.property_size