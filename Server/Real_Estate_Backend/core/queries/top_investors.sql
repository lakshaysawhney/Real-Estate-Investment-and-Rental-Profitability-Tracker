SELECT u.name, COUNT(p.property_id) AS num_properties
FROM Users u
JOIN Properties p ON u.user_id = p.user_id
GROUP BY u.user_id, u.name
ORDER BY num_properties DESC
FETCH FIRST 5 ROWS ONLY
