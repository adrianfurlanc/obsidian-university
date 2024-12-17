---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: " Rafael Guzmán Barrios"
Semester: 2
Year: 2
Created: 2024-03-06 13:36
modified: 2024-12-17T12:19:20+01:00
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

