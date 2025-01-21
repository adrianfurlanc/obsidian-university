---
modified: 2025-01-16T11:18:14+01:00
---
 Tags:: #🔍 
Links:: [[My School|🏫 My School]]
___
## Current Courses

```dataview
table Professor
from !"Extras"
where Year = 3 AND Semester = 1 
SORT file.name
```


## All Courses
*Sorted by most recently taken*
```dataview
TABLE Year, Semester
FROM #course AND !"Extras"
SORT Year desc, Semester desc
```
