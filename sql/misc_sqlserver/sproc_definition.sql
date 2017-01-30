-- view definition of stored procedure without sp_helptext

-- source for following three blocks is http://stackoverflow.com/a/7686517/2578505-- will add personally used query later
--For 2000 (untested, but IIRC it's the right table):

select p.[type]
      ,p.[name]
      ,c.[text]
  from sysobjects p
  join syscomments c
    on p.object_id = c.id
 where p.[type] = 'P'
   and c.[text] like '%foo%'

--For 2005:

select p.[type]
      ,p.[name]
      ,c.[text]
  from sys.objects p
  join sys.syscomments c
    on p.object_id = c.id
 where p.[type] = 'P'
   and c.[text] like '%foo%'

--For 2005 and 2008+

select p.[type]
      ,p.[name]
      ,c.[definition]
  from sys.objects p
  join sys.sql_modules c
    on p.object_id = c.object_id
 where p.[type] = 'P'
   and c.[definition] like '%foo%'