---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: Marta Vela González
Semester: 2
Year: 2
Summary: 
Created: 2024-03-04 17:22
modified: 2024-04-14T18:23:21+02:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___


## Inputs
```dataview
TABLE Course,Tema, Status 
FROM "Spaces/My School/My Inputs" AND #analisis2 
SORT file.ctime ASC
```



## Lectures
```dataview
table Course, Tema, Status
from #lecture AND #analisis2 
sort Tema DESC
```

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
where contains(Course, [[]])
SORT Deadline asc
```
