SELECT p.address, r.tenant_name, r.lease_start, r.lease_end, r.monthly_rent
FROM Properties p
JOIN Rentals r ON p.property_id = r.property_id
WHERE r.lease_end > CURRENT_DATE

-- CURRENT_DATE show's cuurent date according to USER's timezone