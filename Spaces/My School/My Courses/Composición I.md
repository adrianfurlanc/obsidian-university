---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - composicion
Professor: Ana Vázquez Silva Silva
Semester: 1
Year: 3
Summary: Composición
Created: 2024-10-11 14:52
modified: 2024-10-31T11:29:34+01:00
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


