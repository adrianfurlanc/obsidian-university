---
Links: '[[My Courses]]'
Tags: '#course'
Professor: 'José Luis Centeno'
Semester: 1
Year: 2
Summary: 'Composición'
Created: 2023-10-16 11:42
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Info
\_Summary::  Composición
\_Year:: 2
\_Semester:: 1
\_Professor:: José Luis Centeno

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #composicion
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
