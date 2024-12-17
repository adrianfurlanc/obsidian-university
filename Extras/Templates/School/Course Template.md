---
Links: "[[My Courses]]"
Tags: "#course"
Professor: 
Semester: 
Year: 
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: 2024-12-17T12:18:08+01:00
---
\_Links::  [[My Courses]]
___
## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #
```



## Lectures
```dataview
table Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```
