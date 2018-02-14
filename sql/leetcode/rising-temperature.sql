# Write your MySQL query statement below
SELECT a.id
FROM Weather a
JOIN Weather b
ON b.date = DATE_SUB(a.date, INTERVAL 1 DAY)
where a.Temperature > b.Temperature