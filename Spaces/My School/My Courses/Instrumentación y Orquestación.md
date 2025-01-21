---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - orquestacion
Professor: Marta Vela González
Semester: 1
Year: 3
Created: 2024-10-11 14:54
modified: 2025-01-14T12:50:33+01:00
---
\_Links::  [[My Courses]]
___
## Inputs
```dataview
TABLE Tema, Status, Semester
FROM "Spaces/My School/My Inputs" AND #orquestacion 
```



## Lectures
```dataview
table Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Tema asc
```
Ver el tema 2 para repasar el "a 2" y las indicaciones I, II