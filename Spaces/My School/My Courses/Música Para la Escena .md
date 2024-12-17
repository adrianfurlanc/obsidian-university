---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - escena
Professor: Carolina Fontecha
Semester: 1
Year: 3
Created: 2024-10-11 14:57
modified: 2024-12-17T12:17:22+01:00
---
\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Source, Tema, Status 
FROM "Spaces/My School/My Inputs" AND #escena 
```



## Lectures
```dataview
table Created, Tema, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Tema asc
```
