---
Tags: course
Professor: Marta Vela González
Semester: 1
Year: 2
Created: 2023-10-04 19:59
modified: 2024-12-17T12:18:47+01:00
---
\_Tags::  #course #extra
\_Links::  [[My Courses]]
___

## Info
\_Year:: 2 
\_Semester:: 1 
\_Professor:: Marta Vela González

## Inputs
```dataview
TABLE Source, Tema, Status
FROM "Spaces/My School/My Inputs" AND #analisis
```



## Lectures
```dataview
table Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```

