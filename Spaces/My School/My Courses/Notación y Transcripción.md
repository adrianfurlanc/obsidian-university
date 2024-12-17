---
Links:
  - "[[My Courses]]"
Professor: Eva Esteve Roldan
Semester: 1
Year: 2
Created: 2023-10-04 22:39
modified: 2024-12-17T12:17:27+01:00
tags:
  - course
---

\_Links::  [[My Courses]]
___

## Info
\_Year:: 2 
\_Semester:: 1 
\_Professor:: Eva Esteve Roldan

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #notacion
```

## Lectures
```dataview
table Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```



