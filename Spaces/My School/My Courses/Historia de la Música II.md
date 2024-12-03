---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - historia
Professor: Juan González-Castelao
Semester: 1
Year: 3
Summary: Historia
Created: 2023-10-13 15:56
modified: 2024-10-28T14:34:37+01:00
---
## Inputs
```dataview
TABLE Tema, Source, Status 
FROM "Spaces/My School/My Inputs" AND #historia
SORT Tema DESC
```

## Lectures
```dataview
table Tema, Created, Status
FROM #lecture AND !"Extras"
where contains(Course, [[]])
SORT Tema desc
```
