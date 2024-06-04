---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
Professor: Javier Ares Yebra
Semester: 2
Year: 2
Summary: 
Created: 2024-03-15 14:53
modified: 2024-06-04T19:27:49+02:00
---
\_Tags::  #course
\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Source, Status 
FROM "Spaces/My School/My Inputs" AND #empresa 
SORT file.ctime ASC
```



## Lectures
```dataview
table Course, Tema, Status
from #lecture AND #empresa  
sort Tema DESC
```

