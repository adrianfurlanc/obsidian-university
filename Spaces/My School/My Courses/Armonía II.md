---
tags:
  - "#course"
Professor: Manuel Martínez
Semester: 1
Year: 2
Summary: 'Armonía'
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  Armonía
\_Year:: 2 
\_Semester:: 1
\_Professor:: 

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #armonia
```

## Lectures
```dataview
table Created, Status
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
