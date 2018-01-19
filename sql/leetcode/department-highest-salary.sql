# Write your MySQL query statement below
SELECT
  d.Name as Department, e.Name as Employee, Salary
FROM Employee e
JOIN Department d
ON e.DepartmentId = d.Id
WHERE (e.DepartmentId, e.Salary) IN (
  SELECT DepartmentId, MAX(Salary)
  FROM Employee
  GROUP BY DepartmentId
)