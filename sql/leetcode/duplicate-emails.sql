# Write your MySQL query statement below
select email
from (
    select email, count(*) c
    from Person
    group by email
    having c > 1
) s