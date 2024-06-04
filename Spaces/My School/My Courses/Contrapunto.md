---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: " Rafael Guzmán Barrios"
Semester: 2
Year: 2
Summary: 
Created: 2024-03-06 13:36
modified: 2024-04-14T20:34:39+02:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Source, Course, Tema, Status 
FROM "Spaces/My School/My Inputs" AND !#i/book AND #contrapunto 
SORT file.ctime ASC
```

```dataview
TABLE Source, Tema, Status 
FROM "Spaces/My School/My Inputs" AND #i/book AND #contrapunto 
SORT Tema ASC
```

## Lectures
```dataview
table Course, Tema, Status
from #lecture AND #contrapunto  
sort Tema DESC
```

## Assignments 
```dataview
table Deadline, Status
FROM #assignment and !"Extras"
where contains(Course, [[]])
SORT Deadline asc
```
