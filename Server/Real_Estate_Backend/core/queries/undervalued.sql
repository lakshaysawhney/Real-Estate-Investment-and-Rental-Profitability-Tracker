SELECT
    p.property_id, p.address, p.city, p.neighbourhood,
    (p.purchase_price / p.property_size) AS actual_price_per_sqft,
    mt.avg_price_per_sqft,
    mt.avg_price_per_sqft - (p.purchase_price / p.property_size) AS delta
FROM Properties p
JOIN Market_Trends mt ON p.city = mt.city AND p.neighbourhood = mt.neighbourhood
WHERE (p.purchase_price / p.property_size) < mt.avg_price_per_sqft
ORDER BY delta DESC