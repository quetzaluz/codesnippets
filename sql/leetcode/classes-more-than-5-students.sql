# Write your MySQL query statement below

SELECT class
FROM (
    SELECT class, count(DISTINCT student) as c
    FROM courses
    GROUP BY class
) t
where c > 4
