---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: Alberto Rodríguez Molina
Semester: 2
Year: 2
Summary: 
Created: 2024-03-04 14:15
modified: 2024-04-14T18:21:31+02:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Course, Status, Tema
FROM "Spaces/My School/My Inputs" AND #acustica
SORT file.ctime ASC
```



## Lectures
```dataview
table Course, Tema, Status
from #lecture AND #acustica   
sort Tema DESC
```

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
where contains(Course, [[]])
SORT Deadline asc
```
