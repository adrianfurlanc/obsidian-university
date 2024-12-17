---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: Alberto Rodríguez Molina
Semester: 2
Year: 2
Created: 2024-03-04 14:15
modified: 2024-12-17T12:18:36+01:00
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

