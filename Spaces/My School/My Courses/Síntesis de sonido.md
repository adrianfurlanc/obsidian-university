---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - sintesis
Professor: Alejandro Rodríguez Antolín
Semester: 1
Year: 3
Created: 2024-10-11 14:56
modified: 2025-01-15T17:44:53+01:00
---
Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Tema, Status 
FROM "Spaces/My School/My Inputs" AND #sintesis 
sort Tema asc
```



## Lectures
```dataview
table Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Tema asc
```
