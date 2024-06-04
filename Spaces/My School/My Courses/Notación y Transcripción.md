---
Links:
  - "[[My Courses]]"
Professor: Eva Esteve Roldan
Semester: 1
Year: 2
Summary: Notacion
Created: 2023-10-04 22:39
modified: 2024-01-30T16:08:50+01:00
tags:
  - course
---

\_Links::  [[My Courses]]
___

## Info
\_Summary::  Notacion
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

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
SORT Deadline asc
```

