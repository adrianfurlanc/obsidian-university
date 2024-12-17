---
Links:
  - "[[My Courses]]"
tags:
  - "#course"
  - historia
Professor: Juan González-Castelao
Semester: 1
Year: 3
Created: 2023-10-13 15:56
modified: 2024-12-17T12:16:55+01:00
---
## Inputs
```dataview
TABLE Tema, Created, Status 
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
