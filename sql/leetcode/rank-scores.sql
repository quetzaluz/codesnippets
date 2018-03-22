SET @rownum := 0;

SELECT
  s.Score,
  r.Rank
FROM Scores AS s
LEFT JOIN (
    SELECT @rownum := @rownum + 1 AS Rank, Score
    FROM Scores
    GROUP BY Score
    ORDER BY Score DESC
) AS r
ON s.Score = r.Score
ORDER BY s.Score DESC