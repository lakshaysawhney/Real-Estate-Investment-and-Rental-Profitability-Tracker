CREATE OR REPLACE FUNCTION days_to_lease_end(r_id IN RENTALS.rental_id%TYPE)
RETURN NUMBER
IS
    end_date DATE;
BEGIN
    SELECT lease_end INTO end_date FROM Rentals WHERE rental_id = r_id;
    RETURN GREATEST(end_date - SYSDATE, 0);
END
