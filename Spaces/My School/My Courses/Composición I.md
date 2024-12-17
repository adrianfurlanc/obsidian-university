---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - composicion
Professor: Ana Vázquez Silva Silva
Semester: 1
Year: 3
Created: 2024-10-11 14:52
modified: 2024-12-17T12:19:15+01:00
---

\_Links::  [[My Courses]]
___

## Inputs
```dataview
TABLE Tema, Status 
FROM "Spaces/My School/My Inputs" AND #composicion 
```



## Lectures
```dataview
table Tema, Status
from #lecture AND #composicion  
where contains(Course, [[]])
SORT Created asc
```


