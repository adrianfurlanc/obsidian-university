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
modified: 2024-12-17T12:18:19+01:00
---
\_Links::  [[My Courses]]
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
