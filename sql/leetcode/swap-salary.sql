# Write your MySQL query statement below
# see example online, example of update in place
update salary
set sex = case sex when 'f' then 'm' else 'f' end