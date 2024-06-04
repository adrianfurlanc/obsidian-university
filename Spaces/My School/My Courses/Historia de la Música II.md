---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - historia
Professor: Juan González-Castelao
Semester: 1
Year: 2
Summary: Historia
Created: 2023-10-13 15:56
modified: 2024-01-31T13:09:13+01:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  Historia
\_Year:: 2 
\_Semester:: 1 
\_Professor:: Juan González-Castelao

## Inputs
```dataview
TABLE Tema, Status 
FROM "Spaces/My School/My Inputs" AND #historia
SORT Tema DESC
```

## Lectures
```dataview
table Tema, Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Created desc
```

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
where contains(Course, [[]])
SORT Deadline asc
```
