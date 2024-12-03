---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - orquestacion
Professor: Marta Vela González
Semester: 1
Year: 3
Summary: 
Created: 2024-10-11 14:54
modified: 2024-11-19T16:36:33+01:00
---
\_Links::  [[My Courses]]
___
## Inputs
```dataview
TABLE Tema, Status 
FROM "Spaces/My School/My Inputs" AND #orquestacion 
```



## Lectures
```dataview
table Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created asc
```
