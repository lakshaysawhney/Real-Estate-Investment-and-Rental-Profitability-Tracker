CREATE OR REPLACE PROCEDURE calculate_property_roi (
    p_id IN PROPERTIES.property_id%TYPE,
    roi OUT NUMBER
) IS
    rent NUMBER;
    expense NUMBER;
    price NUMBER;
BEGIN
    SELECT NVL(SUM(monthly_rent), 0) * 12 INTO rent FROM Rentals WHERE property_id = p_id;
    SELECT NVL(SUM(amount), 0) INTO expense FROM Expenses WHERE property_id = p_id;
    SELECT purchase_price INTO price FROM Properties WHERE property_id = p_id;

    roi := ROUND(((rent - expense) / price) * 100, 2);
END
